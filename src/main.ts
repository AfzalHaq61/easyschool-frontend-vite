import './init-jquery';
import { createApp } from 'vue';
import router from './router';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import { BootstrapVue3, BToastPlugin } from 'bootstrap-vue-3';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueFeather from 'vue-feather';
import FlagIcon from 'vue-flag-icon';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueApexCharts from "vue3-apexcharts";
import StarRating from 'vue-star-rating';
import Vue3Autocounter from 'vue3-autocounter';
import VueFormWizard from "vue3-form-wizard";
import DatePicker from 'vue3-datepicker';
import VCalendar from 'v-calendar';
import ThemifyIcon from "vue-themify-icons";
import { IconHome } from '@tabler/icons-vue';
import Vue3TagsInput from "vue3-tags-input";
import VueEasyLightbox from "vue-easy-lightbox";
import SimpleLineIcons from "vue-simple-line";
import { defineCustomElements } from 'ionicons/dist/loader';

/***********Layout **********/
import Layout_Header from '@/views/layouts/layout-header.vue'
import Header_Rtl from '@/views/layouts/header-rtl.vue'
import Header_Dark from '@/views/layouts/header-dark.vue'
import Header_Mini from '@/views/layouts/header-mini.vue'
import Header_Box from '@/views/layouts/header-box.vue'
import Layout_Sidebar from '@/views/layouts/layout-sidebar.vue'
import Mini_Sidebar from '@/views/layouts/mini-sidebar.vue'
import Theme_Settings from '@/views/layouts/theme-settings.vue'
import FilesSidebar from "@/views/layouts/files-sidebar.vue";
import VerticalSidebar from '@/views/layouts/vertical-sidebar.vue'
import Index_Loader from '@/views/layouts/index-loader.vue'

/************Shared Components********************/
import Breadcrumb_Index from '@/components/breadcrumb/breadcrumb-index.vue';
import Breadcrumb from '@/components/shared/breadcrumb.vue';
import Top_Action_Buttons from '@/components/shared/buttons/top-action-buttons.vue';
import Refresh_Button from '@/components/shared/buttons/refresh-button.vue';
import Print_Button from '@/components/shared/buttons/print-button.vue';
import Dropdown_Button from '@/components/shared/buttons/dropdown-button.vue';
import Primary_Button from '@/components/shared/buttons/primary-button.vue';
import Secondary_Button from '@/components/shared/buttons/secondary-button.vue';
import Icon_Button from '@/components/shared/buttons/icon-button.vue';
import Alert from "@/components/shared/alert.vue";
import Card from '@/components/shared/table/card.vue';
import DateRangePicker from '@/components/shared/table/date-range-picker.vue';
import SortDropdown from '@/components/shared/table/sort-dropdown.vue';
import SearchFilter from '@/components/shared/table/search-filter.vue';
import RowsPerPageFilter from '@/components/shared/table/rows-per-page-filter.vue';
import BaseModal from '@/components/shared/modals/base-modal.vue';
import RoleAddAndEditModal from '@/components/shared/modals/role-add-and-edit-modal.vue';
import ClassAddEditModal from '@/components/shared/modals/class-add-edit-modal.vue';
import SectionAddEditModal from '@/components/shared/modals/section-add-edit-modal.vue';
import DeleteConfirmModal from '@/components/shared/modals/delete-confirm-modal.vue';

/************Page Components********************/
import ChatContent from "@/views/pages/application/chat/chat-content.vue";
import FolderCarousel from "@/views/pages/application/folder-carousel.vue";
import FileCarousel from "@/views/pages/application/files/files-carousel.vue";
import FileTable from "@/views/pages/application/files/file-table.vue";
import NotesCarousel from "@/views/pages/application/notes-carousel.vue";
import ChatImage from "@/views/pages/application/chat/chat-images.vue";
import ChatRightimage from "@/views/pages/application/chat/chat-right-image.vue";
import ChatRightVideo from "@/views/pages/application/chat/chat-right-video.vue";
import Inputsize from "@/views/pages/uiinterface/forms/form-elements/formbasic/input-size.vue";
import Form_Validation_One from '@/views/pages/uiinterface/forms/form-validation-one.vue'
import Carouselthree from "@/views/pages/uiinterface/baseui/carousel/carousel-three.vue";
import Carouseltwo from "@/views/pages/uiinterface/baseui/carousel/carousel-two.vue";
import Carouselone from "@/views/pages/uiinterface/baseui/carousel/carousel-one.vue";
import LightBoxOne from "@/views/pages/uiinterface/baseui/lightbox/lightbox-one.vue";
import LightBoxTwo from "@/views/pages/uiinterface/baseui/lightbox/lightbox-two.vue";
import Header_Tabs from '@/views/pages/peoples/students/header-tabs.vue'
import Details_Tabs from '@/views/pages/peoples/students/details-tabs.vue'
import Students_Sidebar from '@/views/pages/peoples/students/students-sidebar.vue'
import General_Sidebar from '@/views/pages/settings/general-settings/general-sidebar.vue'
import Website_Sidebar from '@/views/pages/settings/website-settings/website-sidebar.vue'
import App_Sidebar from '@/views/pages/settings/app-settings/app-sidebar.vue'
import System_Sidebar from '@/views/pages/settings/system-settings/system-sidebar.vue'
import Financial_Sidebar from '@/views/pages/settings/financial-settings/financial-sidebar.vue'
import Academic_Sidebar from '@/views/pages/settings/academic-settings/academic-sidebar.vue'
import Others_Sidebar from '@/views/pages/settings/others-settings/others-sidebar.vue'
import Staff_Sidebar from '@/views/pages/hrm/staff/staff-sidebar.vue'
import Staff_Tabs from '@/views/pages/hrm/staff/staff-tabs.vue'
import Admin_banner from '@/views/pages/dashboard/admin-dashboard/admin-banner.vue'
import Admin_Student from '@/views/pages/dashboard/admin-dashboard/admin-student.vue'
import Admin_Schedules from '@/views/pages/dashboard/admin-dashboard/admin-schedules.vue'
import Admin_Best_Performer from '@/views/pages/dashboard/admin-dashboard/admin-best-performer.vue'
import Admin_Star_Students from '@/views/pages/dashboard/admin-dashboard/admin-star-students.vue'
import Admin_Quicklinks from '@/views/pages/dashboard/admin-dashboard/admin-quicklinks.vue'
import Parents_Table from '@/views/pages/dashboard/parent-dashboard/parent-table.vue'
import Student_Profile from '@/views/pages/dashboard/student-dashboard/student-profile.vue'
import Student_Performance from '@/views/pages/dashboard/student-dashboard/student-performance.vue'
import Student_Classes from '@/views/pages/dashboard/student-dashboard/student-classes.vue'
import Student_Leave from '@/views/pages/dashboard/student-dashboard/student-leave.vue'
import Student_Notice from '@/views/pages/dashboard/student-dashboard/student-notice.vue'
import Teacher_Profile from '@/views/pages/dashboard/teacher-dashboard/teacher-profile.vue'
import Teacher_Classes from '@/views/pages/dashboard/teacher-dashboard/teacher-classes.vue'
import Teacher_Lesson from '@/views/pages/dashboard/teacher-dashboard/teacher-lesson.vue'
import Teacher_Table from '@/views/pages/dashboard/teacher-dashboard/teacher-table.vue'
import Rtl_Admin_banner from '@/views/pages/layouts/rtl-admin-banner.vue'
import Rtl_Admin_Student from '@/views/pages/layouts/rtl-admin-student.vue'
import Rtl_Admin_Schedules from '@/views/pages/layouts/rtl-admin-schedules.vue'
import Rtl_Admin_Best_Performer from '@/views/pages/layouts/rtl-admin-best-performer.vue'
import Rtl_Admin_Star_Students from '@/views/pages/layouts/rtl-admin-star-students.vue'
import Rtl_Admin_Quicklinks from '@/views/pages/layouts/rtl-admin-quicklinks.vue'

/************Page Filter********************/
import Table_Filter from '@/views/pages/peoples/students/table-filter.vue'
import Student_Grid_Filter from '@/views/pages/peoples/students/student-grid-filter.vue'
import Parents_Filter from '@/views/pages/peoples/parents/parents-filter.vue'
import Guradians_Filter from '@/views/pages/peoples/guardians/guradians-filter.vue'
import Teachers_Tabs from '@/views/pages/peoples/teachers/teachers-tabs.vue'
import Teachers_Filter from '@/views/pages/peoples/teachers/teachers-filter.vue'
import Teacher_Grid_Filter from '@/views/pages/peoples/teachers/teacher-grid-filter.vue'
import Teacher_Details_Tabs from '@/views/pages/peoples/teachers/teacher-details/teacher-details-tabs.vue'
import Teachers_Sidebar from '@/views/pages/peoples/teachers/teachers-sidebar.vue'
import Teacher_Monday from '@/views/pages/peoples/teachers/teacher-details/routine-teachers/teacher-monday.vue'
import Class_Syllabus_Filter from '@/views/pages/academic/class-syllabus-filter.vue'
import Class_Work_Filter from '@/views/pages/academic/class-work-filter.vue'
import Exam_Filter from '@/views/pages/academic/examination/exam-filter.vue'
import Exam_Schedule_Filter from '@/views/pages/academic/examination/exam-schedule-filter.vue'
import Grade_Filter from '@/views/pages/academic/examination/grade-filter.vue'
import Exam_Result_Filter from '@/views/pages/academic/examination/exam-result-filter.vue'
import Exam_Attendance_Filter from '@/views/pages/academic/examination/exam-attendance-filter.vue'
import Reasons_Filter from '@/views/pages/academic/reasons-filter.vue'
import Fees_Filter from '@/views/pages/management/fees-collection/fees-filter.vue'
import Fees_Type_Filter from '@/views/pages/management/fees-collection/fees-type-filter.vue'
import Fees_Master_Filter from '@/views/pages/management/fees-collection/fees-master-filter.vue'
import Fees_Assign_Filter from '@/views/pages/management/fees-collection/fees-assign-filter.vue'
import Library_Members_Filter from '@/views/pages/management/library-members/library-members-filter.vue'
import Library_Books_Filter from '@/views/pages/management/library-members/library-books-filter.vue'
import Library_Issue_Filter from '@/views/pages/management/library-members/library-issue-filter.vue'
import Sports_Filter from '@/views/pages/management/sports-filter.vue'
import Player_Filter from '@/views/pages/management/player-filter.vue'
import Hostel_Filter from '@/views/pages/management/hostel/hostel-filter.vue'
import Hostel_Rooms_Filter from '@/views/pages/management/hostel/hostel-rooms-filter.vue'
import Hostel_Room_Type_Filter from '@/views/pages/management/hostel/hostel-room-type-filter.vue'
import Transport_Routes_Filter from '@/views/pages/management/transport/transport-routes-filter.vue'
import Pickup_Filter from '@/views/pages/management/transport/pickup-filter.vue'
import Vehicle_Drivers_Filter from '@/views/pages/management/transport/vehicle-drivers-filter.vue'
import Vehicle_Filter from '@/views/pages/management/transport/vehicle-filter.vue'
import Assign_Vehicle_Filter from '@/views/pages/management/transport/assign-vehicle-filter.vue'
import Collect_Filter from '@/views/pages/management/fees-collection/collect-filter.vue'
import Staff_Filter from '@/views/pages/hrm/staff/staff-filter.vue'
import Department_Filter from '@/views/pages/hrm/department-filter.vue'
import Designation_Filter from '@/views/pages/hrm/designation-filter.vue'
import Student_Attendance_Filter from '@/views/pages/hrm/attendance/student-attendance-filter.vue'
import Teacher_Attendance_Filter from '@/views/pages/hrm/attendance/teacher-attendance-filter.vue'
import Staff_Attendance_Filter from '@/views/pages/hrm/attendance/staff-attendance-filter.vue'
import List_Leaves_Filter from '@/views/pages/hrm/leaves/list-leaves-filter.vue'
import Approve_Request_Filter from '@/views/pages/hrm/leaves/approve-request-filter.vue'
import Holiday_Filter from '@/views/pages/hrm/holiday-filter.vue'
import Payroll_Filter from '@/views/pages/hrm/payroll-filter.vue'
import Expenses_Filter from '@/views/pages/finance/accounts/expenses-filter.vue'
import Expenses_Category_Filter from '@/views/pages/finance/accounts/expenses-category-filter.vue'
import Accounts_Income_Filter from '@/views/pages/finance/accounts/accounts-income-filter.vue'
import Accounts_Invoices_Filter from '@/views/pages/finance/accounts/accounts-invoices-filter.vue'
import Accounts_Transactions_Filter from '@/views/pages/finance/accounts/accounts-transactions-filter.vue'
import Language_Filter from '@/views/pages/settings/website-settings/language-filter.vue'
import Blog_Filter from '@/views/pages/content/blog/blog-filter.vue'
import Blog_Comments_Filter from '@/views/pages/content/blog/blog-comments-filter.vue'
import Blog_Categories_Filter from '@/views/pages/content/blog/blog-categories-filter.vue'
import Blog_Tags_Filter from '@/views/pages/content/blog/blog-tags-filter.vue'
import Countries_Filter from '@/views/pages/content/location/countries-filter.vue'
import States_Filter from '@/views/pages/content/location/states-filter.vue'
import Cities_Filter from '@/views/pages/content/location/cities-filter.vue'
import Ticket_Filter from '@/views/pages/support/ticket-filter.vue'
import Contact_Filter from '@/views/pages/support/contact-filter.vue'
import Testimonials_Filter from '@/views/pages/content/testimonials-filter.vue'
import Faq_Filter from '@/views/pages/content/faq-filter.vue'
import Pages_Filter from '@/views/pages/content/pages-filter.vue'
import Notice_Filter from '@/views/pages/announcements/notice-filter.vue'
import Membership_Filter from '@/views/pages/membership/membership-filter.vue'
import Attendance_Report_Tabset from '@/views/pages/report/attendance-report-tabset.vue'
import Attendance_Report_Filter from '@/views/pages/report/attendance-report-fliter.vue'
import Student_Attendance_type_Filter from '@/views/pages/report/student-attendance-type-filter.vue'
import Daily_Attendance_Filter from '@/views/pages/report/daily-attendance-filter.vue'
import Student_Day_Wise_Filter from '@/views/pages/report/student-day-wise-filter.vue'
import Teacher_Day_Wise_Filter from '@/views/pages/report/teacher-day-wise-filter.vue'
import Teacher_Report_Filter from '@/views/pages/report/teacher-report-filter.vue'
import Staff_Day_Wise_Filter from '@/views/pages/report/staff-day-wise-filter.vue'
import Staff_Report_Filter from '@/views/pages/report/staff-report-filter.vue'
import Student_Report_Filter from '@/views/pages/report/student-report-filter.vue'
import Fees_Report_Filter from '@/views/pages/report/fees-report-filter.vue'
import User_Filter from '@/views/pages/user-management/user-filter.vue'
import Leave_Report_Filter from '@/views/pages/report/leave-report-filter.vue'
import Class_Report_Filter from '@/views/pages/report/class-report-filter.vue'
import Grade_Report_Filter from '@/views/pages/report/grade-report-filter.vue'

/************Modal********************/
import Parents_List_Modal from '@/components/modal/parents-list-modal.vue'
import Guardian_Grid_Modal from '@/components/modal/guardian-grid-modal.vue'
import Guardian_List_Modal from '@/components/modal/guardian-list-modal.vue'
import Classes_List_Modal from '@/components/modal/classes-list-modal.vue'
import Schedule_List_Modal from '@/components/modal/schedule-list-modal.vue'
import Student_Details_Modal from '@/components/modal/student-details-modal.vue'
import Teacher_Details_Modal from '@/components/modal/teacher-details-modal.vue'
import Class_Room_Modal from '@/components/modal/class-room-modal.vue'
import Class_Section_Modal from '@/components/modal/class-section-modal.vue'
import Class_Subject_Modal from '@/components/modal/class-subject-modal.vue'
import Class_Syllabus_Modal from '@/components/modal/class-syllabus-modal.vue'
import Class_Time_Modal from '@/components/modal/class-time-modal.vue'
import Class_Work_Modal from '@/components/modal/class-work-modal.vue'
import Exam_List_Modal from '@/components/modal/exam-list-modal.vue'
import Exam_Schedule_Modal from '@/components/modal/exam-schedule-modal.vue'
import Academic_Reasons_Modal from '@/components/modal/academic-reasons-modal.vue'
import Fees_Group_Modal from '@/components/modal/fees-group-modal.vue'
import Fees_Type_Modal from '@/components/modal/fees-type-modal.vue'
import Fees_Assign_Modal from '@/components/modal/fees-assign-modal.vue'
import Fees_Master_Modal from '@/components/modal/fees-master-modal.vue'
import Library_Members_Modal from '@/components/modal/library-members-modal.vue'
import Library_Books_Modal from '@/components/modal/library-books-modal.vue'
import Sports_Modal from '@/components/modal/sports-modal.vue'
import Hostel_List_Modal from '@/components/modal/hostel-list-modal.vue'
import Hostel_Room_Modal from '@/components/modal/hostel-room-modal.vue'
import Hostel_Room_Type_Modal from '@/components/modal/hostel-room-type-modal.vue'
import Transport_Routes_Modal from '@/components/modal/transport-routes-modal.vue'
import Pickup_Modal from '@/components/modal/pickup-modal.vue'
import Vehicle_Drivers_Modal from '@/components/modal/vehicle-drivers-modal.vue'
import Vehicle_Modal from '@/components/modal/vehicle-modal.vue'
import Assign_Vehicle_Modal from '@/components/modal/assign-vehicle-modal.vue'
import Connected_Modal from '@/components/modal/connected-modal.vue'
import Department_Modal from '@/components/modal/department-modal.vue'
import Designation_Modal from '@/components/modal/designation-modal.vue'
import List_Leaves_Modal from '@/components/modal/list-leaves-modal.vue'
import Approve_Request_Modal from '@/components/modal/approve-request-modal.vue'
import Holiday_Modal from '@/components/modal/holiday-modal.vue'
import Expenses_Modal from '@/components/modal/expenses-modal.vue'
import Expenses_Category_Modal from '@/components/modal/expenses-category-modal.vue'
import Accounts_Income_Modal from '@/components/modal/accounts-income-modal.vue'
import Accounts_Invoices_Modal from '@/components/modal/accounts-invoices-modal.vue'
import Email_Templates_Modal from '@/components/modal/email-templates-modal.vue'
import Payment_Gateways_Modal from '@/components/modal/payment-gateways-modal.vue'
import Religion_Modal from '@/components/modal/religion-modal.vue'
import Tax_Rates_Modal from '@/components/modal/tax-rates-modal.vue'
import Ban_Modal from '@/components/modal/ban-modal.vue'
import Email_Settings_Modal from '@/components/modal/email-settings-modal.vue'
import Blog_Modal from '@/components/modal/blog-modal.vue'
import Blog_Categories_Modal from '@/components/modal/blog-categories-modal.vue'
import Blog_Comments_Modal from '@/components/modal/blog-comments-modal.vue'
import Blog_Tags_Modal from '@/components/modal/blog-tags-modal.vue'
import Countires_Modal from '@/components/modal/countires-modal.vue'
import States_Modal from '@/components/modal/states-modal.vue'
import Cities_Modal from '@/components/modal/cities-modal.vue'
import Ticket_Modal from '@/components/modal/ticket-modal.vue'
import Language_Modal from '@/components/modal/language-modal.vue'
import Testimonials_Modal from '@/components/modal/testimonials-modal.vue'
import Faq_Modal from '@/components/modal/faq-modal.vue'
import Pages_Modal from '@/components/modal/pages-modal.vue'
import Grade_Modal from '@/components/modal/grade-modal.vue'
import Custom_Fields_Modal from '@/components/modal/custom-fields-modal.vue'
import Students_List_Modal from '@/components/modal/students-list-modal.vue'
import Teachers_Modal from '@/components/modal/teachers-modal.vue'
import Notice_Modal from '@/components/modal/notice-modal.vue'
import Event_Modal from '@/components/modal/event-modal.vue'
import Membership_Modal from '@/components/modal/membership-modal.vue'
import Class_report_Modal from '@/components/modal/class-report-modal.vue'
import Role_Permission_Modal from '@/components/modal/role-permission-modal.vue'
import Permission_Modal from '@/components/modal/permission-modal.vue'
import Calendar_modal from '@/components/modal/calendar-modal.vue'
import Todo_Modal from '@/components/modal/todo-modal.vue'
import Notes_Modal from '@/components/modal/notes-modal.vue'
import File_Manager_Modal from '@/components/modal/file-manager-modal.vue'
import Parent_Dashboard_Modal from '@/components/modal/parent-dashboard-modal.vue'
import Staff_Leaves_Modal from '@/components/modal/staff-leaves-modal.vue'
import Contact_Messages_Modal from '@/components/modal/contact-messages-modal.vue'
import Profile_Modal from '@/components/modal/profile-modal.vue'
import Admin_Dashboard_Modal from '@/components/modal/admin-dashboard-modal.vue'
import Student_Dashboard_Modal from '@/components/modal/student-dashboard-modal.vue'
import Teacher_Dashboard_Modal from '@/components/modal/teacher-dashboard-modal.vue'
import Collect_Fees_Modal from '@/components/modal/collect-fees-modal.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css';
import 'weathericons/css/weather-icons.min.css';
import "boxicons/css/boxicons.min.css";
import "v-calendar/dist/style.css";
import '@/assets/css/feather.css';
import '@/assets/css/sticky.css';
import '@/assets/css/tabler-icons.css';
import '@/assets/css/vue-form-wizard.css';
import '@/assets/css/global.css'
import '@/assets/scss/main.scss';

defineCustomElements(window)

const app = createApp(App)

/*Global Components*/

/*************Layout*****************/
app.component('layout-header', Layout_Header);
app.component('header-rtl', Header_Rtl);
app.component('header-dark', Header_Dark);
app.component('header-mini', Header_Mini);
app.component('header-box', Header_Box);
app.component('layout-sidebar', Layout_Sidebar);
app.component('mini-sidebar', Mini_Sidebar);
app.component('theme-settings', Theme_Settings);
app.component("files-sidebar", FilesSidebar);
app.component('vertical-sidebar', VerticalSidebar);
app.component('index-loader', Index_Loader);

/*************Shared Components*****************/
app.component('breadcrumb-index', Breadcrumb_Index);
app.component('breadcrumb', Breadcrumb);
app.component('top-action-buttons', Top_Action_Buttons);
app.component('refresh-button', Refresh_Button);
app.component('print-button', Print_Button);
app.component('dropdown-button', Dropdown_Button);
app.component('primary-button', Primary_Button);
app.component('secondary-button', Secondary_Button);
app.component('icon-button', Icon_Button);
app.component('alert', Alert);
app.component('card', Card);
app.component('date-range-picker', DateRangePicker);
app.component('sort-dropdown', SortDropdown);
app.component('search-filter', SearchFilter);
app.component('rows-per-page-filter', RowsPerPageFilter);
app.component('base-modal', BaseModal);
app.component('role-add-and-edit-modal', RoleAddAndEditModal);
app.component('class-add-edit-modal', ClassAddEditModal);
app.component('section-add-edit-modal', SectionAddEditModal);
app.component('delete-confirm-modal', DeleteConfirmModal);

app.component('attendance-report-tabset', Attendance_Report_Tabset);

/************Page Components********************/
app.component("chat-content", ChatContent);
app.component("folder-carousel", FolderCarousel);
app.component("files-carousel", FileCarousel);
app.component("file-table", FileTable);
app.component("notes-carousel", NotesCarousel);
app.component("chat-images", ChatImage);
app.component("chat-right-image", ChatRightimage);
app.component("chat-right-video", ChatRightVideo);
app.component("input-size", Inputsize);
app.component('form-validation-one', Form_Validation_One)
app.component("carousel-one", Carouselone);
app.component("carousel-two", Carouseltwo);
app.component("carousel-three", Carouselthree);
app.component("lightbox-one", LightBoxOne);
app.component("lightbox-two", LightBoxTwo);
app.component('header-tabs', Header_Tabs)
app.component('details-tabs', Details_Tabs)
app.component('students-sidebar', Students_Sidebar)
app.component('general-sidebar', General_Sidebar)
app.component('website-sidebar', Website_Sidebar)
app.component('app-sidebar', App_Sidebar)
app.component('system-sidebar', System_Sidebar)
app.component('financial-sidebar', Financial_Sidebar)
app.component('academic-sidebar', Academic_Sidebar)
app.component('others-sidebar', Others_Sidebar)
app.component('staff-sidebar', Staff_Sidebar)
app.component('staff-tabs', Staff_Tabs)
app.component('admin-banner', Admin_banner)
app.component('admin-student', Admin_Student)
app.component('admin-schedules', Admin_Schedules)
app.component('admin-best-performer', Admin_Best_Performer)
app.component('admin-star-students', Admin_Star_Students)
app.component('admin-quicklinks', Admin_Quicklinks)
app.component('parent-table', Parents_Table)
app.component('student-profile', Student_Profile)
app.component('student-performance', Student_Performance)
app.component('student-classes', Student_Classes)
app.component('student-leave', Student_Leave)
app.component('student-notice', Student_Notice)
app.component('teacher-profile', Teacher_Profile)
app.component('teacher-classes', Teacher_Classes)
app.component('teacher-lesson', Teacher_Lesson)
app.component('teacher-table', Teacher_Table)
app.component('rtl-admin-student', Rtl_Admin_Student)
app.component('rtl-admin-banner', Rtl_Admin_banner)
app.component('rtl-admin-schedules', Rtl_Admin_Schedules)
app.component('rtl-admin-best-performer', Rtl_Admin_Best_Performer)
app.component('rtl-admin-star-students', Rtl_Admin_Star_Students)
app.component('rtl-admin-quicklinks', Rtl_Admin_Quicklinks)

/************Page Filter********************/
app.component('table-filter', Table_Filter)
app.component('student-grid-filter', Student_Grid_Filter)
app.component('parents-filter', Parents_Filter)
app.component('guradians-filter', Guradians_Filter)
app.component('teachers-tabs', Teachers_Tabs)
app.component('teachers-filter', Teachers_Filter)
app.component('teachers-sidebar', Teachers_Sidebar)
app.component('teacher-grid-filter', Teacher_Grid_Filter)
app.component('teacher-details-tabs', Teacher_Details_Tabs)
app.component('teacher-monday', Teacher_Monday)
app.component('class-syllabus-filter', Class_Syllabus_Filter)
app.component('class-work-filter', Class_Work_Filter)
app.component('exam-filter', Exam_Filter)
app.component('exam-schedule-filter', Exam_Schedule_Filter)
app.component('grade-filter', Grade_Filter)
app.component('exam-result-filter', Exam_Result_Filter)
app.component('exam-attendance-filter', Exam_Attendance_Filter)
app.component('reasons-filter', Reasons_Filter)
app.component('fees-filter', Fees_Filter)
app.component('fees-type-filter', Fees_Type_Filter)
app.component('fees-master-filter', Fees_Master_Filter)
app.component('fees-assign-filter', Fees_Assign_Filter)
app.component('library-members-filter', Library_Members_Filter)
app.component('library-books-filter', Library_Books_Filter)
app.component('library-issue-filter', Library_Issue_Filter)
app.component('sports-filter', Sports_Filter)
app.component('player-filter', Player_Filter)
app.component('hostel-filter', Hostel_Filter)
app.component('hostel-rooms-filter', Hostel_Rooms_Filter)
app.component('hostel-room-type-filter', Hostel_Room_Type_Filter)
app.component('transport-routes-filter', Transport_Routes_Filter)
app.component('pickup-filter', Pickup_Filter)
app.component('vehicle-drivers-filter', Vehicle_Drivers_Filter)
app.component('vehicle-filter', Vehicle_Filter)
app.component('assign-vehicle-filter', Assign_Vehicle_Filter)
app.component('staff-filter', Staff_Filter)
app.component('department-filter', Department_Filter)
app.component('designation-filter', Designation_Filter)
app.component('student-attendance-filter', Student_Attendance_Filter)
app.component('teacher-attendance-filter', Teacher_Attendance_Filter)
app.component('staff-attendance-filter', Staff_Attendance_Filter)
app.component('approve-request-filter', Approve_Request_Filter)
app.component('list-leaves-filter', List_Leaves_Filter)
app.component('holiday-filter', Holiday_Filter)
app.component('payroll-filter', Payroll_Filter)
app.component('expenses-filter', Expenses_Filter)
app.component('expenses-category-filter', Expenses_Category_Filter)
app.component('accounts-income-filter', Accounts_Income_Filter)
app.component('accounts-invoices-filter', Accounts_Invoices_Filter)
app.component('accounts-transactions-filter', Accounts_Transactions_Filter)
app.component('language-filter', Language_Filter)
app.component('blog-filter', Blog_Filter)
app.component('blog-comments-filter', Blog_Comments_Filter)
app.component('blog-categories-filter', Blog_Categories_Filter)
app.component('blog-tags-filter', Blog_Tags_Filter)
app.component('countries-filter', Countries_Filter)
app.component('states-filter', States_Filter)
app.component('cities-filter', Cities_Filter)
app.component('ticket-filter', Ticket_Filter)
app.component('testimonials-filter', Testimonials_Filter)
app.component('faq-filter', Faq_Filter)
app.component('notice-filter', Notice_Filter)
app.component('membership-filter', Membership_Filter)
app.component('attendance-report-filter', Attendance_Report_Filter)
app.component('student-attendance-type-filter', Student_Attendance_type_Filter)
app.component('daily-attendance-filter', Daily_Attendance_Filter)
app.component('student-day-wise-filter', Student_Day_Wise_Filter)
app.component('teacher-day-wise-filter', Teacher_Day_Wise_Filter)
app.component('teacher-report-filter', Teacher_Report_Filter)
app.component('staff-day-wise-filter', Staff_Day_Wise_Filter)
app.component('staff-report-filter', Staff_Report_Filter)
app.component('student-report-filter', Student_Report_Filter)
app.component('fees-report-filter', Fees_Report_Filter)
app.component('user-filter', User_Filter)
app.component('leave-report-filter', Leave_Report_Filter)
app.component('collect-filter', Collect_Filter)
app.component('contact-filter', Contact_Filter)
app.component('pages-filter', Pages_Filter)
app.component('class-report-filter', Class_Report_Filter)
app.component('grade-report-filter', Grade_Report_Filter)

/************Modal********************/
app.component('parents-list-modal', Parents_List_Modal)
app.component('guardian-grid-modal', Guardian_Grid_Modal)
app.component('guardian-list-modal', Guardian_List_Modal)
app.component('classes-list-modal', Classes_List_Modal)
app.component('schedule-list-modal', Schedule_List_Modal)
app.component('student-details-modal', Student_Details_Modal)
app.component('teacher-details-modal', Teacher_Details_Modal)
app.component('class-room-modal', Class_Room_Modal)
app.component('class-section-modal', Class_Section_Modal)
app.component('class-subject-modal', Class_Subject_Modal)
app.component('class-syllabus-modal', Class_Syllabus_Modal)
app.component('class-time-modal', Class_Time_Modal)
app.component('class-work-modal', Class_Work_Modal)
app.component('exam-list-modal', Exam_List_Modal)
app.component('exam-schedule-modal', Exam_Schedule_Modal)
app.component('academic-reasons-modal', Academic_Reasons_Modal)
app.component('fees-group-modal', Fees_Group_Modal)
app.component('fees-type-modal', Fees_Type_Modal)
app.component('fees-assign-modal', Fees_Assign_Modal)
app.component('fees-master-modal', Fees_Master_Modal)
app.component('library-members-modal', Library_Members_Modal)
app.component('library-books-modal', Library_Books_Modal)
app.component('sports-modal', Sports_Modal)
app.component('hostel-list-modal', Hostel_List_Modal)
app.component('hostel-room-modal', Hostel_Room_Modal)
app.component('hostel-room-type-modal', Hostel_Room_Type_Modal)
app.component('transport-routes-modal', Transport_Routes_Modal)
app.component('pickup-modal', Pickup_Modal)
app.component('vehicle-drivers-modal', Vehicle_Drivers_Modal)
app.component('vehicle-modal', Vehicle_Modal)
app.component('assign-vehicle-modal', Assign_Vehicle_Modal)
app.component('connected-modal', Connected_Modal)
app.component('department-modal', Department_Modal)
app.component('designation-modal', Designation_Modal)
app.component('list-leaves-modal', List_Leaves_Modal)
app.component('approve-request-modal', Approve_Request_Modal)
app.component('holiday-modal', Holiday_Modal)
app.component('expenses-modal', Expenses_Modal)
app.component('expenses-category-modal', Expenses_Category_Modal)
app.component('accounts-income-modal', Accounts_Income_Modal)
app.component('accounts-invoices-modal', Accounts_Invoices_Modal)
app.component('email-templates-modal', Email_Templates_Modal)
app.component('payment-gateways-modal', Payment_Gateways_Modal)
app.component('religion-modal', Religion_Modal)
app.component('tax-rates-modal', Tax_Rates_Modal)
app.component('ban-modal', Ban_Modal)
app.component('email-settings-modal', Email_Settings_Modal)
app.component('blog-modal', Blog_Modal)
app.component('blog-categories-modal', Blog_Categories_Modal)
app.component('blog-comments-modal', Blog_Comments_Modal)
app.component('blog-tags-modal', Blog_Tags_Modal)
app.component('countires-modal', Countires_Modal)
app.component('states-modal', States_Modal)
app.component('cities-modal', Cities_Modal)
app.component('ticket-modal', Ticket_Modal)
app.component('language-modal', Language_Modal)
app.component('testimonials-modal', Testimonials_Modal)
app.component('faq-modal', Faq_Modal)
app.component('pages-modal', Pages_Modal)
app.component('grade-modal', Grade_Modal)
app.component('custom-fields-modal', Custom_Fields_Modal)
app.component('students-list-modal', Students_List_Modal)
app.component('teachers-modal', Teachers_Modal)
app.component('notice-modal', Notice_Modal)
app.component('event-modal', Event_Modal)
app.component('membership-modal', Membership_Modal)
app.component('class-report-modal', Class_report_Modal)
app.component('role-permission-modal', Role_Permission_Modal)
app.component('permission-modal', Permission_Modal)
app.component('calendar-modal', Calendar_modal)
app.component('todo-modal', Todo_Modal)
app.component('notes-modal', Notes_Modal)
app.component('file-manager-modal', File_Manager_Modal)
app.component('parent-dashboard-modal', Parent_Dashboard_Modal)
app.component('staff-leaves-modal', Staff_Leaves_Modal)
app.component('contact-messages-modal', Contact_Messages_Modal)
app.component('profile-modal', Profile_Modal)
app.component('admin-dashboard-modal', Admin_Dashboard_Modal)
app.component('student-dashboard-modal', Student_Dashboard_Modal)
app.component('teacher-dashboard-modal', Teacher_Dashboard_Modal)
app.component('collect-fees-modal', Collect_Fees_Modal);

app.component(VueFeather.name, VueFeather);
app.component('vue3-autocounter', Vue3Autocounter);
app.use(VueSweetalert2);
app.use(VueApexCharts);
app.component('star-rating', StarRating);
app.component('date-picker', DatePicker);
app.component('vue3-tags-input', Vue3TagsInput);

(window as any).global = window;

app.use(FlagIcon)
    .use(Antd)
    .use(VueEasyLightbox)
app.component('FormWizard', VueFormWizard);
app.use(VCalendar)
app.use(BootstrapVue3)
app.use(BToastPlugin);
app.component('ThemifyIcon', ThemifyIcon);
app.component('SimpleLineIcons', SimpleLineIcons);
app.component('IconHome', IconHome);
app.use(createPinia());
app.use(router).mount('#app');
