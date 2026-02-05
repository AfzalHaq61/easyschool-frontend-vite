<template>
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
        <div class="content">
            <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
                <breadcrumb-index :title="title" :text="text" :text1="text1" :text2="text2" />
                <top-action-buttons name="Route" id="add_route" @print="() => exportData('print')" @export="exportData"
                    @add="openAddRouteModal" />
            </div>

            <alert v-if="notificationStore.notification"
                :type="notificationStore.notification.status === 'error' ? 'danger' : notificationStore.notification.status"
                :icon="notificationStore.notification.status === 'error' ? 'alert-octagon' : 'check-circle'"
                :message="notificationStore.notification.message"
                @update:message="notificationStore.notification.message = $event" />

            <card title="Routes" v-model:dateRange="dateRange" v-model:currentSort="currentSort"
                @update:currentSort="sortRoutes" v-model:rowsPerPage="rowsPerPage" v-model:searchQuery="searchQuery"
                :show-filter="true" @filter-apply="applyFilter" @filter-reset="resetFilter">
                <template #filter-body>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <vue-select v-model="filterStatus" :options="statusOptions" id="seleus"
                                    placeholder="Select" />
                            </div>
                        </div>
                    </div>
                </template>
                <div class="custom-datatable-filter table-responsive">
                    <a-table class="table datatable thead-light" :columns="columns" :data-source="routes"
                        :row-selection="rowSelection" :pagination="{
                            current: routesStore.currentPage,
                            pageSize: routesStore.perPage,
                            total: routesStore.total,
                            showSizeChanger: true,
                            showQuickJumper: true
                        }" @change="handleTableChange">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'route_id'">
                                <div>
                                    <a href="javascript:void(0);" class="link-primary">{{ record.RouteID }}</a>
                                </div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span :class="record.statusClass" class="badge d-inline-flex align-items-center">
                                    <i class="ti ti-circle-filled fs-5 me-1"></i>{{ record.Status }}
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
                                                    data-bs-toggle="modal" data-bs-target="#edit_route"
                                                    @click="selectedRoute = { id: record.id, ...record.originalAttributes }"><i
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
    <route-modal :route-data="selectedRoute" @refresh="fetchRoutes"></route-modal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import VueSelect from 'vue3-select2-component';
import moment from "moment";
import { useRoutesStore } from '@/stores/routes';
import { useNotificationStore } from "@/stores/notification";
import RouteModal from '@/components/modal/route-modal.vue';

const routesStore = useRoutesStore();
const notificationStore = useNotificationStore();

const title = "Routes";
const text = "Dashboard";
const text1 = "Transport";
const text2 = "Routes";

const selectedRoute = ref({});
const today = new Date();
const dateRange = ref([today, today]);
const rowsPerPage = ref(routesStore.perPage);
let currentSort = ref('asc');
const searchQuery = ref('');
const filterStatus = ref('Select');
const statusOptions = ref(['Select', 'Active', 'Inactive']);

const columns = [
    {
        title: "ID",
        dataIndex: "route_id",
        key: "route_id",
        sorter: true,
    },
    {
        title: "Route Name",
        dataIndex: "name",
        key: "name",
        sorter: true,
    },
    {
        title: "Added On",
        dataIndex: "created_at",
        key: "created_at",
        sorter: true,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "Status",
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

const fetchRoutes = async () => {
    await routesStore.index();
};

const handleTableChange = (pagination, filters, sorter) => {
    routesStore.currentPage = pagination.current;
    routesStore.perPage = pagination.pageSize;
    rowsPerPage.value = pagination.pageSize;

    if (sorter && sorter.field && sorter.order) {
        const sortOrder = sorter.order === 'ascend' ? 'asc' : 'desc';
        currentSort.value = sortOrder;
        routesStore.sort = sortOrder;
        routesStore.sortBy = sorter.field; // field names match backend allowedSorts
    }

    fetchRoutes();
};

const sortRoutes = (sortType) => {
    currentSort.value = sortType;
    routesStore.sort = sortType;
    fetchRoutes();
};

const exportData = async (type) => {
    routesStore.exportType = type;
    await routesStore.export();
};

const handleDelete = (id) => {
    routesStore.id = id;
};

const openAddRouteModal = () => {
    selectedRoute.value = {};
};

const applyFilter = () => {
    routesStore.status = filterStatus.value === 'Select' ? null : filterStatus.value.toLowerCase();
    routesStore.currentPage = 1;
    fetchRoutes();
};

const resetFilter = () => {
    filterStatus.value = 'Select';
    routesStore.status = null;
    routesStore.currentPage = 1;
    fetchRoutes();
};

watch(rowsPerPage, (newVal) => {
    routesStore.perPage = parseInt(newVal);
    routesStore.currentPage = 1;
    fetchRoutes();
});

watch(dateRange, (newRange) => {
    const m = moment.default || moment;
    const [start, end] = newRange;
    routesStore.dateStart = m(start).format('YYYY-MM-DD');
    routesStore.dateEnd = m(end).format('YYYY-MM-DD');
    routesStore.currentPage = 1;
    fetchRoutes();
});

watch(searchQuery, (newVal) => {
    routesStore.search = newVal;
    routesStore.currentPage = 1;
    fetchRoutes();
});

onMounted(() => {
    fetchRoutes();
});

const routes = computed(() => (routesStore.routes || []).map((item, index) => {
    const attr = item.attributes || {};
    return {
        key: index + 1,
        id: item.id,
        RouteID: attr.route_id || `TR-${item.id}`,
        name: attr.name,
        created_at: moment(attr.created_at).format('DD MMM YYYY'),
        Status: attr.status ? attr.status.charAt(0).toUpperCase() + attr.status.slice(1) : 'Active',
        statusClass: attr.status === 'inactive' ? 'badge-soft-danger' : 'badge-soft-success',
        status: attr.status || 'active',
        originalAttributes: attr
    };
}));
</script>
