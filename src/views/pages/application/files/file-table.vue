<template>
  <a-table :columns="columns" :data-source="data" :row-selection="{}">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'Name'">
        <div class="d-flex align-items-center">
          <a href="javascript:void(0);" class="avatar avatar-md"
            ><img
              :src="require(`@/assets/img/icons/${record.Image}`)"
              class="img-fluid"
              alt="img"
          /></a>
          <div class="ms-2">
            <p class="text-dark mb-0">
              <a href="javascript:void(0);">{{ record.Name }}</a>
            </p>
          </div>
        </div>
      </template>
      <template v-else-if="column.key === 'Owned'">
        <div class="d-flex align-items-center">
          <a href="javascript:void(0);" class="avatar avatar-md"
            ><img
              :src="require(`@/assets/img/profiles/${record.Member_image}`)"
              class="img-fluid rounded-circle"
              alt="img"
          /></a>
          <div class="ms-2">
            <p class="text-dark mb-0">
              <a href="javascript:void(0);">{{ record.Owned }}</a>
            </p>
          </div>
        </div>
      </template>
      <template v-else-if="column.key === 'action'">
        <div class="dropdown">
          <a
            href="javascript:void(0);"
            class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="ti ti-dots-vertical fs-14"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-right p-3">
            <li>
              <a class="dropdown-item rounded-1" href="javascript:void(0);"
                ><i class="ti ti-trash me-2"></i>Permanent Delete</a
              >
            </li>
            <li>
              <a class="dropdown-item rounded-1" href="javascript:void(0);"
                ><i class="ti ti-edit-circle me-2"></i>Restore File</a
              >
            </li>
          </ul>
        </div>
      </template>
    </template>
  </a-table>
</template>

<script>
const columns = [
  {
    sorter: true,
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Last Modified",
    dataIndex: "Modified",
    sorter: {
      compare: (a, b) => {
        a = a.Modified.toLowerCase();
        b = b.Modified.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Size",
    dataIndex: "Size",
    sorter: {
      compare: (a, b) => {
        a = a.Size.toLowerCase();
        b = b.Size.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Owned Memebr",
    dataIndex: "Owned",
    key: "Owned",
    sorter: {
      compare: (a, b) => {
        a = a.Owned.toLowerCase();
        b = b.Owned.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    Image: "folder.svg",
    Name: "Digimed",
    Modified: "Today 08:30 AM \nby Angel",
    Size: "200 MB",
    Owned: "Nolan Christopher",
    Member_image: "avatar-06.jpg",
  },
  {
    id: "2",
    Name: "Estimation",
    Image: "xls.svg",
    Modified: "Today 09:20 AM",
    Size: "140 MB",
    Owned: "Nolan Harris",
    Member_image: "avatar-05.jpg",
  },
  {
    id: "3",
    Image: "pdf-02.svg",
    Name: "Intro.pdf",
    Modified: "27 July 2023",
    Size: "70 MB",
    Owned: "Me",
    Member_image: "avatar-10.jpg",
  },
  {
    id: "4",
    Image: "video.svg",
    Name: "Demoworrking.mp4",
    Modified: "24 July 2023\n08:25 AM",
    Size: "180 MB",
    Owned: "Daniel",
    Member_image: "avatar-02.jpg",
  },
  {
    id: "5",
    Image: "audio.svg",
    Name: "voice.mp3",
    Modified: "27 July 2023",
    Size: "80 MB",
    Owned: "Henriques",
    Member_image: "avatar-07.jpg",
  },
];
export default {
  data() {
    return {
      columns,
      data,
    };
  },
};
</script>
