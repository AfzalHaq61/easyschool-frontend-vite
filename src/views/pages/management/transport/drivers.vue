<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
        <div class="content">
            <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
                <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
                <top-action-buttons name="Driver" id="add_driver" @print="() => exportData('print')"
                    @export="exportData" @add="openAddDriverModal" />
            </div>

            <alert v-if="notificationStore.notification"
                :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
                :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
                :message="notificationStore.notification.message"
                @update:message="notificationStore.notification.message = $event" />

            <card title="Drivers List" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
                @update:currentSort="sortDrivers" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
                :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
                <template #filter-body>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <vue-select v-model="filterStatus" :options="statusOptions" id="filterStatus"
                                    placeholder="Select" />
                            </div>
                        </div>
                    </div>
                </template>
                <div class="custom-datatable-filter table-responsive">
                    <a-table class="table datatable thead-light" :columns="columns" :data-source="drivers"
                        :row-selection="rowSelection" :pagination="{
                            current: driversStore.currentPage,
                            pageSize: driversStore.perPage,
                            total: driversStore.total,
                            showSizeChanger: true,
                            showQuickJumper: true
                        }" @change="handleTableChange">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'id'">
                                <div>
                                    <a href="javascript:void(0);" class="link-primary">{{ record.DisplayID }}</a>
                                </div>
                            </template>
                            <template v-if="column.key === 'name'">
                                <h2 class="table-avatar d-flex align-items-center">
                                    <user-avatar :image="record.image" size="avatar-lg" />
                                    <div class="ms-2">
                                        <a href="javascript:void(0);" class="text-dark fw-medium">{{ record.name }}</a>
                                        <a href="javascript:void(0);" class="fs-12" style="color: #999999;">{{
                                            record.email }}</a>
                                    </div>
                                </h2>
                            </template>
                            <template v-if="column.key === 'status'">
                                <span :class="record.statusClass" class="badge d-inline-flex align-items-center">
                                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{ record.StatusLabel }}
                                </span>
                            </template>
                            <template v-if="column.key === 'action'">
                                <div class="d-flex align-items-center">
                                    <div class="dropdown">
                                        <a href="javascript:void(0);"
                                            class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="ti ti-dots-vertical fs-14"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
                                            <li>
                                                <a class="dropdown-item rounded-1" href="javascript:void(0);"
                                                    data-bs-toggle="modal" data-bs-target="#edit_driver"
                                                    @click="selectedDriver = { id: record.id, ...record.originalAttributes }"><i
                                                        class="ti ti-edit-circle me-2"></i>Edit</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item rounded-1" href="javascript:void(0);"
                                                    @click="handleDelete(record.id)" data-bs-toggle="modal"
                                                    data-bs-target="#delete-modal"><i
                                                        class="ti ti-trash-x me-2"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </div>
            </card>
        </div>
    </div>
    <driver-modal :driver-data="selectedDriver" @refresh="fetchDrivers"></driver-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useDriversStore } from '@/stores/drivers';
import { useNotificationStore } from "@/stores/notification";

const driversStore = useDriversStore();
const notificationStore = useNotificationStore();

const title = "Drivers";
const text = "Dashboard";
const text1 = "Management";
const text2 = "Drivers";

const selectedDriver = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(driversStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        sorter: true,
    },
    {
        title: "Driver",
        dataIndex: "name",
        key: "name",
        sorter: true,
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        sorter: true,
    },
    {
        title: "License No",
        dataIndex: "driver_license",
        key: "driver_license",
        sorter: true,
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
        sorter: true,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        sorter: true,
    },
    {
        title: "Action",
        key: "action",
        width: 80,
    },
];

const rowSelection = {
    onChange: () => { },
    onSelect: () => { },
    onSelectAll: () => { },
};

const fetchDrivers = async () => {
    await driversStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
    driversStore.currentPage = pagination.current;
    driversStore.perPage = pagination.pageSize;
    rowsPerPage.value = pagination.pageSize;

    if (sorter && sorter.order) {
        const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
        currentSort.value = sortOrder;
        driversStore.sort = sortOrder;
    }

    fetchDrivers();
};

const sortDrivers = (sortType) => {
    currentSort.value = sortType;
    driversStore.sort = sortType;
    fetchDrivers();
};

const exportData = async (type) => {
    driversStore.exportType = type;
    await driversStore.export();
};

const handleDelete = (id) => {
    driversStore.id = id;
};

const openAddDriverModal = () => {
    selectedDriver.value = {};
};

const applyFilter = () => {
    driversStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
    driversStore.currentPage = 1;
    fetchDrivers();
};

const resetFilter = () => {
    filterStatus.value = 'Select';
    driversStore.status = null;
    driversStore.currentPage = 1;
    fetchDrivers();
};

watch(rowsPerPage, (newVal) => {
    driversStore.perPage = parseInt(newVal);
    driversStore.currentPage = 1;
    fetchDrivers();
});

watch(dateRange, (newRange) => {
    const m = moment.default || moment;
    if (newRange && newRange.length === 2) {
        driversStore.dateStart = m(newRange[0]).format('YYYY-MM-DD');
        driversStore.dateEnd = m(newRange[1]).format('YYYY-MM-DD');
    } else {
        driversStore.dateStart = '';
        driversStore.dateEnd = '';
    }
    driversStore.currentPage = 1;
    fetchDrivers();
});

watch(searchQuery, (newVal) => {
    driversStore.search = newVal;
    driversStore.currentPage = 1;
    fetchDrivers();
});

onMounted(() => {
    fetchDrivers();
});

const drivers = computed(() => (driversStore.drivers || []).map((item) => {
    const attr = item.attributes || {};
    return {
        id: item.id,
        DisplayID: attr.model_id || `D-${item.id}`,
        name: attr.name,
        email: attr.email,
        phone: attr.phone,
        address: attr.address,
        driver_license: attr.driver_license,
        image: attr.image,
        status: attr.status || 'active',
        StatusLabel: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
        statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
        originalAttributes: attr
    };
}));
</script>
