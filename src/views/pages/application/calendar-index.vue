<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a
              href="javascript:void(0);"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_event"
              >Create Event</a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <h4 class="mb-3">Drag & Drop Event</h4>
          <div id="calendar-events" class="mb-3">
            <div class="calendar-events rounded" data-class="bg-info">
              <i class="ti ti-circle-filled fs-8 text-info"></i> My Event One
            </div>
            <div class="calendar-events rounded" data-class="bg-success">
              <i class="ti ti-circle-filled fs-8 text-success"></i> My Event Two
            </div>
            <div class="calendar-events rounded" data-class="bg-danger">
              <i class="ti ti-circle-filled fs-8 text-danger"></i> My Event Three
            </div>
            <div class="calendar-events rounded" data-class="bg-warning">
              <i class="ti ti-circle-filled fs-8 text-warning"></i> My Event Four
            </div>
          </div>
          <div class="form-check form-check mb-3">
            <input class="form-check-input" type="checkbox" /> Remove after drop
          </div>
          <a
            href="javascript:void(0);"
            data-bs-toggle="modal"
            data-bs-target="#add_new_event"
            class="btn mb-3 btn-primary d-flex align-items-center justify-content-center"
          >
            <i class="ti ti-plus me-1"></i>Add Category
          </a>
        </div>
        <div class="col-lg-9 col-md-8">
          <div class="card bg-white">
            <div class="card-body">
              <FullCalendar :options="calendarOptions" :events="events"></FullCalendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <calendar-modal></calendar-modal>
</template>
<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      title: "Calendar",
      text: "Dashboard",
      text1: "Application",
      text2: "Calendar",
      startdate: currentDate,
      events: [],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
          {
            title: "12:40p Test Event 1",
            start: currentDate,
            className: "bg-success",
          },
          {
            title: "11:20a Test Event 2",
            start: "2023-03-15",
            className: "bg-info",
          },
          {
            title: "10:33a Test Event 3",
            start: "2023-03-17",
            className: "bg-primary",
          },
          {
            title: "5:47a Event Name 4",
            start: "2023-03-15",
            className: "bg-purple",
          },
        ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
  props: {
    msg: String,
  },
  components: {
    FullCalendar,
  },
};
</script>
