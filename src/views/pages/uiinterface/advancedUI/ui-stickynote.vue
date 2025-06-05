<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Sticky Note</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->
      <div class="row">
        <!-- Sticky -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">
                Sticky Note
                <button class="btn btn-primary float-sm-end m-l-10" @click="newNote">
                  Add New Note
                </button>
              </h5>
            </div>
            <div class="card-body">
              <div class="sticky-note" ref="board"></div>
            </div>
          </div>
        </div>
        <!-- /Sticky -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "StickyNote",
  setup() {
    const board = ref(null);

    // Autogrow function
    function autogrow(textareas) {
      textareas.forEach(function (textarea) {
        const minHeight = textarea.offsetHeight;
        const computedStyle = window.getComputedStyle(textarea);
        const noFlickerPad = textarea.classList.contains("autogrow-short")
          ? 0
          : parseInt(computedStyle.lineHeight) || 0;
        const shadow = document.createElement("div");

        Object.assign(shadow.style, {
          position: "absolute",
          top: "-10000px",
          left: "-10000px",
          width: `${textarea.offsetWidth}px`,
          fontSize: computedStyle.fontSize,
          fontFamily: computedStyle.fontFamily,
          fontWeight: computedStyle.fontWeight,
          lineHeight: computedStyle.lineHeight,
          resize: "none",
          wordWrap: "break-word",
        });

        document.body.appendChild(shadow);

        function update(event) {
          function times(string, number) {
            let r = "";
            for (let i = 0; i < number; i++) {
              r += string;
            }
            return r;
          }

          let val = textarea.value
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/&/g, "&amp;")
            .replace(/\n$/, "<br/>&nbsp;")
            .replace(/\n/g, "<br/>")
            .replace(/ {2,}/g, function (space) {
              return times("&nbsp;", space.length - 1) + " ";
            });

          if (event && event.type === "keydown" && event.keyCode === 13) {
            val += "<br />";
          }

          shadow.style.width = `${textarea.offsetWidth}px`;
          shadow.innerHTML = val + (noFlickerPad === 0 ? "..." : "");
          textarea.style.height = `${Math.max(
            shadow.offsetHeight + noFlickerPad,
            minHeight
          )}px`;
        }

        textarea.addEventListener("input", update);
        window.addEventListener("resize", update);

        update();
      });
    }

    // Delete note function
    function deleteNote() {
      const note = this.parentElement;
      note.style.transition = "transform 0.25s, opacity 0.25s";
      note.style.transform = "scale(1.33)";
      note.style.opacity = 0;
      setTimeout(() => {
        note.remove();
      }, 250);
    }

    // New note function
    function newNote() {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = noteTemp;
      const note = tempDiv.firstElementChild;

      note.style.display = "none";
      board.value.appendChild(note);
      setTimeout(() => {
        note.style.display = "block";
        note.style.transition = "opacity 0.3s";
        note.style.opacity = 1;
      }, 10);

      note.draggable = true;
      note.addEventListener("dragstart", function () {
        note.style.zIndex = ++noteZindex;
      });

      note.querySelector(".remove").addEventListener("click", deleteNote);

      const textareas = note.querySelectorAll("textarea");
      autogrow(Array.from(textareas));

      return false;
    }

    // Define noteTemp and noteZindex
    const noteTemp = `
      <div class="note">
        <a href="javascript:void(0);" class="button remove">X</a>
        <div class="note_cnt">
          <textarea class="title" placeholder="Enter note title"></textarea>
          <textarea class="cnt" placeholder="Enter note description here"></textarea>
        </div>
      </div>`;

    let noteZindex = 1;

    onMounted(() => {
      newNote();
    });

    return {
      newNote,
      board,
    };
  },
};
</script>
