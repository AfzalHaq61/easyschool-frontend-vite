import { createRouter, createWebHistory } from 'vue-router';

import login from '@/views/pages/pages/auth/login.vue'
import Forgot_Password from '@/views/pages/pages/auth/forgot-password.vue'
import Reset_Password from '@/views/pages/pages/auth/reset-password.vue'
import Reset_Password_Succes from '@/views/pages/pages/auth/reset-password-success.vue'
import Email_Verification from '@/views/pages/pages/auth/email-verification.vue'
import Two_Step_Verification from '@/views/pages/pages/auth/two-step-verification.vue'
import Lock_Screen from '@/views/pages/pages/auth/lock-screen.vue'
import Error_404 from '@/views/pages/pages/error/404-error.vue'
import Error_500 from '@/views/pages/pages/error/500-error.vue'
import Pages_Index from '@/views/pages/pages/pages-index.vue'
import Blank_Page from '@/views/pages/pages/blank-page.vue'
import Profile_Index from '@/views/pages/pages/profile-index.vue'
import Coming_Soon from '@/views/pages/pages/coming-soon.vue'
import Under_Maintenance from '@/views/pages/pages/under-maintenance.vue'
import Email from '@/views/pages/application/email-index.vue'
import Todo from '@/views/pages/application/todo-index.vue'
import Notes from '@/views/pages/application/notes-index.vue'
import FileManager from '@/views/pages/application/files/file-manager.vue'
import Application from '@/views/pages/application/application-index.vue'
import Chat from '@/views/pages/application/chat/chat-index.vue'
import Call from '@/views/pages/application/call/call-index.vue'
import VideoCall from '@/views/pages/application/call/video-call.vue'
import AudioCall from '@/views/pages/application/call/audio-call.vue'
import CallHistory from '@/views/pages/application/call/call-history.vue'
import Calendar from '@/views/pages/application/calendar-index.vue'
import Tables from '@/views/pages/uiinterface/tables/ui-tables.vue'
import Tables_Basic from '@/views/pages/uiinterface/tables/tables-basic.vue'
import Data_Tables from '@/views/pages/uiinterface/tables/data-tables.vue'
import Chartapex from '@/views/pages/uiinterface/charts/apex/chart-apex.vue'
import Chartc3 from '@/views/pages/uiinterface/charts/c3/chart-c3.vue'
import Chartflot from '@/views/pages/uiinterface/charts/flot/chart-flot.vue'
import Chartjs from '@/views/pages/uiinterface/charts/js/chart-js.vue'
import Chartmorris from '@/views/pages/uiinterface/charts/morris/chart-morris.vue'
import Charts from '@/views/pages/uiinterface/charts/ui-charts.vue'
import Forms from '@/views/pages/uiinterface/forms/ui-forms.vue'
import Formbasicinput from '@/views/pages/uiinterface/forms/form-elements/formbasic/formbasic-input.vue'
import Formcheckboxradios from '@/views/pages/uiinterface/forms/form-elements/form-checkbox-radios.vue'
import Formgridgutters from '@/views/pages/uiinterface/forms/form-elements/form-grid-gutters.vue'
import Formselect from '@/views/pages/uiinterface/forms/form-elements/form-select.vue'
import FormInput from '@/views/pages/uiinterface/forms/form-elements/forminput/form-input.vue'
import Formmask from '@/views/pages/uiinterface/forms/form-elements/formmask/formmask.vue'
import Formfileupload from '@/views/pages/uiinterface/forms/form-elements/formfile-upload.vue'
import FormHorizontal from '@/views/pages/uiinterface/forms/layouts/form-horizontal.vue'
import Formvertical from '@/views/pages/uiinterface/forms/layouts/form-vertical.vue'
import Formfloatinglabels from '@/views/pages/uiinterface/forms/layouts/form-floating-labels.vue'
import Formvalidation from '@/views/pages/uiinterface/forms/form-validation.vue'
import Formselect2 from '@/views/pages/uiinterface/forms/form-select2.vue'
import Formelements from '@/views/pages/uiinterface/forms/form-elements/form-elements.vue'
import Formwizard from '@/views/pages/uiinterface/forms/form-wizard.vue'
import Advancedui from '@/views/pages/uiinterface/advancedUI/advanced-ui.vue'
import UI_Ribbon from '@/views/pages/uiinterface/advancedUI/ui-ribbon.vue'
import UI_Clipboard from '@/views/pages/uiinterface/advancedUI/ui-clipboard.vue'
import UI_Drag_Drop from '@/views/pages/uiinterface/advancedUI/ui-drag-drop.vue'
import UI_Text_Editor from '@/views/pages/uiinterface/advancedUI/ui-text-editor.vue'
import UI_Counter from '@/views/pages/uiinterface/advancedUI/ui-counter.vue'
import UI_Scrollbar from '@/views/pages/uiinterface/advancedUI/ui-scrollbar.vue'
import UI_Rating from '@/views/pages/uiinterface/advancedUI/ui-rating.vue'
import UI_Stickynote from '@/views/pages/uiinterface/advancedUI/ui-stickynote.vue'
import UI_Timeline from '@/views/pages/uiinterface/advancedUI/ui-timeline.vue'
import BaseUi from '@/views/pages/uiinterface/baseui/base-ui.vue'
import UI_Alerts from '@/views/pages/uiinterface/baseui/ui-alerts.vue'
import UI_Accordion from '@/views/pages/uiinterface/baseui/ui-accordion.vue'
import UI_Avatar from '@/views/pages/uiinterface/baseui/ui-avatar.vue'
import UI_Badges from '@/views/pages/uiinterface/baseui/ui-badges.vue'
import UI_Borders from '@/views/pages/uiinterface/baseui/ui-borders.vue'
import UI_Buttons from '@/views/pages/uiinterface/baseui/ui-buttons.vue'
import UI_Buttons_group from '@/views/pages/uiinterface/baseui/ui-buttons-group.vue'
import UI_Breadcrumb from '@/views/pages/uiinterface/baseui/ui-breadcrumb.vue'
import UI_Cards from '@/views/pages/uiinterface/baseui/ui-cards.vue'
import UI_Carousel from '@/views/pages/uiinterface/baseui/carousel/ui-carousel.vue'
import UI_Colors from '@/views/pages/uiinterface/baseui/ui-colors.vue'
import UI_Dropdowns from '@/views/pages/uiinterface/baseui/ui-dropdowns.vue'
import UI_Grid from '@/views/pages/uiinterface/baseui/ui-grid.vue'
import UI_Images from '@/views/pages/uiinterface/baseui/ui-images.vue'
import UI_Lightbox from '@/views/pages/uiinterface/baseui/lightbox/ui-lightbox.vue'
import UI_Media from '@/views/pages/uiinterface/baseui/ui-media.vue'
import UI_Modals from '@/views/pages/uiinterface/baseui/ui-modals.vue'
import UI_Offcanvas from '@/views/pages/uiinterface/baseui/ui-offcanvas.vue'
import UI_Pagination from '@/views/pages/uiinterface/baseui/ui-pagination.vue'
import UI_Popovers from '@/views/pages/uiinterface/baseui/ui-popovers.vue'
import UI_Progress from '@/views/pages/uiinterface/baseui/ui-progress.vue'
import UI_Placeholders from '@/views/pages/uiinterface/baseui/ui-placeholders.vue'
import UI_Rangeslider from '@/views/pages/uiinterface/advancedUI/ui-rangeslider.vue'
import Ui_Navtabs from '@/views/pages/uiinterface/baseui/ui-nav-tabs.vue'
import UI_Spinner from '@/views/pages/uiinterface/baseui/ui-spinner.vue'
import UI_Sweetalerts from '@/views/pages/uiinterface/baseui/ui-sweetalerts.vue'
import UI_Tooltips from '@/views/pages/uiinterface/baseui/ui-tooltips.vue'
import UI_Typography from '@/views/pages/uiinterface/baseui/ui-typography.vue'
import UI_Video from '@/views/pages/uiinterface/baseui/ui-video.vue'
import Icons from '@/views/pages/uiinterface/icons/ui-icons.vue'
import UI_Iconfontawesome from "@/views/pages/uiinterface/icons/icon-fontawesome.vue";
import UI_Iconfeather from "@/views/pages/uiinterface/icons/icon-feather.vue";
import UI_Iconionic from "@/views/pages/uiinterface/icons/icon-ionic.vue";
import UI_Iconmaterial from "@/views/pages/uiinterface/icons/icon-material.vue";
import UI_Iconpe7 from "@/views/pages/uiinterface/icons/icon-pe7.vue";
import UI_Iconsimpleline from "@/views/pages/uiinterface/icons/icon-simpleline.vue";
import UI_Iconthemify from "@/views/pages/uiinterface/icons/icon-themify.vue";
import UI_Iconweather from "@/views/pages/uiinterface/icons/icon-weather.vue";
import UI_Icontypicon from "@/views/pages/uiinterface/icons/icon-typicon.vue";
import UI_Iconflag from "@/views/pages/uiinterface/icons/icon-flag.vue";
import Student_Index from '@/views/pages/peoples/students/student-index.vue'
import Student_List from '@/views/pages/peoples/students/student-list.vue'
import Student_Grid from '@/views/pages/peoples/students/student-grid.vue'
import Student_Details from '@/views/pages/peoples/students/student-details.vue'
import Student_Time_Table from '@/views/pages/peoples/students/student-time-table/student-time-table.vue'
import Student_Leaves from '@/views/pages/peoples/students/student-leaves.vue'
import Student_Result from '@/views/pages/peoples/students/student-result.vue'
import Student_Fees from '@/views/pages/peoples/students/student-fees.vue'
import Student_Library from '@/views/pages/peoples/students/student-library.vue'
import Student_Promotion from '@/views/pages/peoples/students/students-promotion.vue'
import Add_Student from '@/views/pages/peoples/students/add-student.vue'
import Edit_Student from '@/views/pages/peoples/students/edit-student.vue'
import Teachers_Index from '@/views/pages/peoples/teachers/teachers-index.vue'
import Teacher_List from '@/views/pages/peoples/teachers/teacher-list.vue'
import Teacher_Grid from '@/views/pages/peoples/teachers/teacher-grid.vue'
import Add_Teacher from '@/views/pages/peoples/teachers/add-teacher.vue'
import Edit_Teacher from '@/views/pages/peoples/teachers/edit-teacher.vue'
import Teacher_Details from '@/views/pages/peoples/teachers/teacher-details/teacher-details.vue'
import Teacher_Leaves from '@/views/pages/peoples/teachers/teacher-details/teacher-leaves.vue'
import Teacher_Salary from '@/views/pages/peoples/teachers/teacher-details/teacher-salary.vue'
import Teacher_Library from '@/views/pages/peoples/teachers/teacher-details/teacher-library.vue'
import Routine_Teachers from '@/views/pages/peoples/teachers/teacher-details/routine-teachers/routine-teachers.vue'
import Guardians_Index from '@/views/pages/peoples/guardians/guardians-index.vue'
import Guardians_List from '@/views/pages/peoples/guardians/guardians-list.vue'
import Guardian_Grid from '@/views/pages/peoples/guardians/guardian-grid.vue'
import Parents_Index from '@/views/pages/peoples/parents/parents-index.vue'
import Parents_List from '@/views/pages/peoples/parents/parents-list.vue'
import Parents_Grid from '@/views/pages/peoples/parents/parents-grid.vue'
import Classes_Index from '@/views/pages/academic/classes/classes-index.vue'
import Classes_List from '@/views/pages/academic/classes/classes-list.vue'
import Schedule_Classes from '@/views/pages/academic/classes/schedule-classes.vue'
import Academic_Index from '@/views/pages/academic/academic-index.vue'
import Class_Room from '@/views/pages/academic/class-room.vue'
import Class_Routine from '@/views/pages/academic/class-routine.vue'
import Class_Section from '@/views/pages/academic/class-section.vue'
import Class_Subject from '@/views/pages/academic/class-subject.vue'
import Class_Syllabus from '@/views/pages/academic/class-syllabus.vue'
import Class_Home_Work from '@/views/pages/academic/class-home-work.vue'
import Class_Time_Table from '@/views/pages/academic/class-time-table/class-time-table.vue'
import Exam_Index from '@/views/pages/academic/examination/exam-index.vue'
import Exam_List from '@/views/pages/academic/examination/exam-list.vue'
import Exam_Schedule from '@/views/pages/academic/examination/exam-schedule.vue'
import Grade_List from '@/views/pages/academic/examination/grade-list.vue'
import Exam_Results from '@/views/pages/academic/examination/exam-results.vue'
import Exam_Attendance from '@/views/pages/academic/examination/exam-attendance.vue'
import Academic_Reasons from '@/views/pages/academic/academic-reasons.vue'
import Management_Index from '@/views/pages/management/management-index.vue'
import Fees_Index from '@/views/pages/management/fees-collection/fees-index.vue'
import Fees_Group from '@/views/pages/management/fees-collection/fees-group.vue'
import Fees_Type from '@/views/pages/management/fees-collection/fees-type.vue'
import Fees_Master from '@/views/pages/management/fees-collection/fees-master.vue'
import Fees_Assign from '@/views/pages/management/fees-collection/fees-assign.vue'
import Collect_Fees from '@/views/pages/management/fees-collection/collect-fees.vue'
import Library_Index from '@/views/pages/management/library-members/library-index.vue'
import Library_Members from '@/views/pages/management/library-members/library-members.vue'
import Library_Books from '@/views/pages/management/library-members/library-books.vue'
import Library_Return from '@/views/pages/management/library-members/library-return.vue'
import Library_Issue_Book from '@/views/pages/management/library-members/library-issue-book.vue'
import Sports_List from '@/views/pages/management/sports-list.vue'
import Player_List from '@/views/pages/management/player-list.vue'
import Hostel_Index from '@/views/pages/management/hostel/hostel-index.vue'
import Hostel_List from '@/views/pages/management/hostel/hostel-list.vue'
import Hostel_Rooms from '@/views/pages/management/hostel/hostel-rooms.vue'
import Hostel_Room_Type from '@/views/pages/management/hostel/hostel-room-type.vue'
import Transport_Index from '@/views/pages/management/transport/transport-index.vue'
import Transport_Routes from '@/views/pages/management/transport/transport-routes.vue'
import Transport_Pickup_Points from '@/views/pages/management/transport/transport-pickup-points.vue'
import Transport_Vehicle_Drivers from '@/views/pages/management/transport/transport-vehicle-drivers.vue'
import Transport_Vehicle from '@/views/pages/management/transport/transport-vehicle.vue'
import Transport_Assign_Vehicle from '@/views/pages/management/transport/transport-assign-vehicle.vue'
import Settings_Index from '@/views/pages/settings/general-settings/settings-index.vue'
import Profile_Settings from '@/views/pages/settings/general-settings/profile-settings.vue'
import Security_Settings from '@/views/pages/settings/general-settings/security-settings.vue'
import Notifications_Settings from '@/views/pages/settings/general-settings/notifications-settings.vue'
import Connected_Apps from '@/views/pages/settings/general-settings/connected-apps.vue'
import Website_Settings from '@/views/pages/settings/website-settings/website-settings.vue'
import Company_Settings from '@/views/pages/settings/website-settings/company-settings.vue'
import Localization from '@/views/pages/settings/website-settings/localization-settings.vue'
import Prefixes from '@/views/pages/settings/website-settings/prefixes-settings.vue'
import Preferences from '@/views/pages/settings/website-settings/preferences-settings.vue'
import Social_Authentication from '@/views/pages/settings/website-settings/social-authentication.vue'
import Language_Settings from '@/views/pages/settings/website-settings/language-settings.vue'
import App_Settings from '@/views/pages/settings/app-settings/app-settings.vue'
import Invoice_Settings from '@/views/pages/settings/app-settings/invoice-settings.vue'
import Custom_Fields from '@/views/pages/settings/app-settings/custom-fields.vue'
import System_Settings from '@/views/pages/settings/system-settings/system-settings.vue'
import Email_Settings from '@/views/pages/settings/system-settings/email-settings.vue'
import Sms_Settings from '@/views/pages/settings/system-settings/sms-settings.vue'
import Otp_Settings from '@/views/pages/settings/system-settings/otp-settings.vue'
import Email_Templates from '@/views/pages/settings/system-settings/email-templates.vue'
import Gdpr_Cookies from '@/views/pages/settings/system-settings/gdpr-cookies.vue'
import Financial_Settings from '@/views/pages/settings/financial-settings/financial-settings.vue'
import Payment_Gateways from '@/views/pages/settings/financial-settings/payment-gateways.vue'
import Tax_Rates from '@/views/pages/settings/financial-settings/tax-rates.vue'
import Academic_Settings from '@/views/pages/settings/academic-settings/academic-settings.vue'
import School_Settings from '@/views/pages/settings/academic-settings/school-settings.vue'
import Religion from '@/views/pages/settings/academic-settings/religion-settings.vue'
import Others_Settings from '@/views/pages/settings/others-settings/others-settings.vue'
import Storage_Settings from '@/views/pages/settings/others-settings/storage-settings.vue'
import Ban_Ip_Address from '@/views/pages/settings/others-settings/ban-ip-address.vue'
import HRM_Index from '@/views/pages/hrm/hrm-index.vue'
import Staff_List from '@/views/pages/hrm/staff/staff-list.vue'
import Add_Staff from '@/views/pages/hrm/staff/add-staff.vue'
import Edit_Staff from '@/views/pages/hrm/staff/edit-staff.vue'
import Staff_Details from '@/views/pages/hrm/staff/staff-details.vue'
import Staff_Payroll from '@/views/pages/hrm/staff/staff-payroll.vue'
import Staff_Leaves from '@/views/pages/hrm/staff/staff-leaves.vue'
import Staffs_Attendance from '@/views/pages/hrm/staff/staffs-attendance.vue'
import Department_List from '@/views/pages/hrm/department-list.vue'
import Designation_List from '@/views/pages/hrm/designation-list.vue'
import Holiday_List from '@/views/pages/hrm/holiday-list.vue'
import Payroll_List from '@/views/pages/hrm/payroll-list.vue'
import Attendance_Index from '@/views/pages/hrm/attendance/attendance-index.vue'
import Student_Attendance from '@/views/pages/hrm/attendance/student-attendance.vue'
import Teacher_Attendance from '@/views/pages/hrm/attendance/teacher-attendance.vue'
import Staff_Attendance from '@/views/pages/hrm/attendance/staff-attendance.vue'
import Leaves_Index from '@/views/pages/hrm/leaves/leaves-index.vue'
import List_Leaves from '@/views/pages/hrm/leaves/list-leaves.vue'
import Approve_Request from '@/views/pages/hrm/leaves/approve-request.vue'
import Accounts_Index from '@/views/pages/finance/accounts/accounts-index.vue'
import Expenses_List from '@/views/pages/finance/accounts/expenses-list.vue'
import Expenses_Category from '@/views/pages/finance/accounts/expenses-category.vue'
import Accounts_Income from '@/views/pages/finance/accounts/accounts-income.vue'
import Accounts_Invoices from '@/views/pages/finance/accounts/accounts-invoices.vue'
import Invoice from '@/views/pages/finance/accounts/invoice-list.vue'
import Add_Invoice from '@/views/pages/finance/accounts/add-invoice.vue'
import Edit_Invoice from '@/views/pages/finance/accounts/edit-inovice.vue'
import Accounts_Transactions from '@/views/pages/finance/accounts/accounts-transactions.vue'
import Report from '@/views/pages/report/report-index.vue';
import AttendanceReport from '@/views/pages/report/attendance-report.vue';
import StudentAttendanceType from '@/views/pages/report/student-attendance-type.vue';
import Content_Index from '@/views/pages/content/content-index.vue'
import Pages_List from '@/views/pages/content/pages-list.vue'
import Testimonials_List from '@/views/pages/content/testimonials-list.vue'
import Faq_List from '@/views/pages/content/faq-list.vue'
import All_Blog from '@/views/pages/content/blog/all-blog.vue'
import Blog_Index from '@/views/pages/content/blog/blog-index.vue'
import Blog_Categories from '@/views/pages/content/blog/blog-categories.vue'
import Blog_Comments from '@/views/pages/content/blog/blog-comments.vue'
import Blog_Tags from '@/views/pages/content/blog/blog-tags.vue'
import Location_Index from '@/views/pages/content/location/location-index.vue'
import Countries_List from '@/views/pages/content/location/countries-list.vue'
import States_List from '@/views/pages/content/location/states-list.vue'
import Cities_List from '@/views/pages/content/location/cities-list.vue'
import Support_Index from '@/views/pages/support/support-index.vue'
import Contact_Messages from '@/views/pages/support/contact-messages.vue'
import Ticket_List from '@/views/pages/support/ticket-list.vue'
import Ticket_Grid from '@/views/pages/support/ticket-grid.vue'
import Ticket_Details from '@/views/pages/support/ticket-details.vue'
import Announcements_Index from '@/views/pages/announcements/announcements-index.vue'
import Notice_Board from '@/views/pages/announcements/notice-board.vue'
import Event_List from '@/views/pages/announcements/event-list.vue'
import Membership_Index from '@/views/pages/membership/membership-index.vue'
import Membership_Plans from '@/views/pages/membership/membership-plans.vue'
import Membership_Addons from '@/views/pages/membership/membership-addons.vue'
import Membership_Transactions from '@/views/pages/membership/membership-transactions.vue'
import Daily_Attendance from '@/views/pages/report/daily-attendance.vue'
import Student_Day_Wise from '@/views/pages/report/student-day-wise.vue'
import Teacher_Day_Wise from '@/views/pages/report/teacher-day-wise.vue'
import Teacher_Report from '@/views/pages/report/teacher-report.vue'
import Staff_Day_Wise from '@/views/pages/report/staff-day-wise.vue'
import Staff_Report from '@/views/pages/report/staff-report.vue'
import Class_Report from '@/views/pages/report/class-report.vue'
import Student_Report from '@/views/pages/report/student-report.vue'
import Grade_Report from '@/views/pages/report/grade-report.vue'
import Fees_Report from '@/views/pages/report/fees-report.vue'
import User_Management from '@/views/pages/user-management/user-management.vue'
import User_List from '@/views/pages/user-management/user-list.vue'
import Roles_Permission from '@/views/pages/user-management/roles-permission.vue'
import Permission_List from '@/views/pages/user-management/permission-list.vue'
import Delete_Account from '@/views/pages/user-management/delete-account.vue'
import Leave_Report from '@/views/pages/report/leave-report.vue'
import Dashboard from '@/views/pages/dashboard/dashboard-index.vue'
import Admin_Dashboard from '@/views/pages/dashboard/admin-dashboard/admin-dashboard.vue'
import Parent_Dashboard from '@/views/pages/dashboard/parent-dashboard/parent-dashboard.vue'
import Student_Dashboard from '@/views/pages/dashboard/student-dashboard/student-dashboard.vue'
import Teacher_Dashboard from '@/views/pages/dashboard/teacher-dashboard/teacher-dashboard.vue'
import Activities_Index from '@/views/pages/activities-index.vue'
import Layout_Mini from '@/views/pages/layouts/layout-mini.vue'
import Layout_Default from '@/views/pages/layouts/layout-default.vue'
import Layout_Box from '@/views/pages/layouts/layout-box.vue'
import Layout_Rtl from '@/views/pages/layouts/layout-rtl.vue'
import Layout_Dark from '@/views/pages/layouts/layout-dark.vue'
import { authGuard, authVerified } from '@/middleware/auth';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { layout: "GuestLayout" }, // Assign GuestLayout
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: Forgot_Password,
    meta: { layout: "GuestLayout", requiresGuest: true },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: Reset_Password,
    props: route => ({
      token: route.query.token,
      email: route.query.email,
    }),
    meta: { layout: "GuestLayout", requiresGuest: true },
  },
  {
    path: '/reset-password-success',
    name: 'reset-password-success',
    component: Reset_Password_Succes,
    meta: { layout: "GuestLayout", requiresGuest: true },
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: Email_Verification,
    meta: { layout: "GuestLayout", requiresAuth: true },
  },
  {
    path: '/two-step-verification',
    name: 'two-step-verification',
    component: Two_Step_Verification,
    meta: { layout: "GuestLayout", requiresAuth: true },
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: Lock_Screen,
  },
  {
    path: '/404-error',
    name: '404-error',
    component: Error_404,
  },
  {
    path: '/500-error',
    name: '500-error',
    component: Error_500,
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: Coming_Soon,
  },
  {
    path: '/under-maintenance',
    name: 'under-maintenance',
    component: Under_Maintenance,
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities_Index,
  },
  {
    path: '/layout-mini',
    name: 'layout-mini',
    component: Layout_Mini,
  },
  {
    path: '/layout-default',
    name: 'layout-default',
    component: Layout_Default,
  },
  {
    path: '/layout-box',
    name: 'layout-box',
    component: Layout_Box,
  },
  {
    path: '/layout-rtl',
    name: 'layout-rtl',
    component: Layout_Rtl,
  },
  {
    path: '/layout-dark',
    name: 'layout-dark',
    component: Layout_Dark,
  },
  {
    path: '/pages',
    component: Pages_Index,
    children: [
      { path: '', redirect: '/pages/profile' },
      { path: "profile", component: Profile_Index },
      { path: "blank-page", component: Blank_Page },
      { path: "membership-addons", component: Membership_Addons },
      { path: "membership-transactions", component: Membership_Transactions },
    ]
  },
  {
    path: '/membership',
    component: Membership_Index,
    children: [
      { path: '', redirect: '/membership/membership-plans' },
      { path: "membership-plans", component: Membership_Plans },
      { path: "membership-addons", component: Membership_Addons },
      { path: "membership-transactions", component: Membership_Transactions },
    ]
  },
  {
    path: '/user',
    component: User_Management,
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: '/user/user-list' },
      { path: "user-list", component: User_List },
      {
        path: "roles-permission",
        component: Roles_Permission
      },
      { path: "permission", component: Permission_List },
      { path: "delete-account", component: Delete_Account },
    ]
  },
  {
    path: '/announcements',
    component: Announcements_Index,
    children: [
      { path: '', redirect: '/announcements/notice-board' },
      { path: "notice-board", component: Notice_Board },
      { path: "event-list", component: Event_List },
    ]
  },
  {
    path: '/content',
    component: Content_Index,
    children: [
      { path: '', redirect: '/content/pages' },
      { path: "pages-list", component: Pages_List },
      { path: "testimonials-list", component: Testimonials_List },
      { path: "faq", component: Faq_List },
    ]
  },
  {
    path: '/support',
    component: Support_Index,
    children: [
      { path: '', redirect: '/support/contact-messages' },
      { path: "contact-messages", component: Contact_Messages },
      { path: "ticket-list", component: Ticket_List },
      { path: "ticket-grid", component: Ticket_Grid },
      { path: "ticket-details", component: Ticket_Details },
    ]
  },
  {
    path: '/location',
    component: Location_Index,
    children: [
      { path: '', redirect: '/countries/countries-list' },
      { path: "countries-list", component: Countries_List },
      { path: "states-list", component: States_List },
      { path: "cities-list", component: Cities_List },
    ]
  },
  {
    path: '/blogs',
    component: Blog_Index,
    children: [
      { path: '', redirect: '/blogs/blog' },
      { path: "blog", component: All_Blog },
      { path: "blog-categories", component: Blog_Categories },
      { path: "blog-comments", component: Blog_Comments },
      { path: "blog-tags", component: Blog_Tags },
    ]
  },
  {
    path: '/settings',
    component: Settings_Index,
    children: [
      { path: '', redirect: '/settings/profile-settings' },
      { path: "profile-settings", component: Profile_Settings },
      { path: "security-settings", component: Security_Settings },
      { path: "notifications-settings", component: Notifications_Settings },
      { path: "connected-apps", component: Connected_Apps },
    ]
  },
  {
    path: '/website-settings',
    component: Website_Settings,
    children: [
      { path: '', redirect: '/website-settings/company-settings' },
      { path: "company-settings", component: Company_Settings },
      { path: "localization", component: Localization },
      { path: "prefixes", component: Prefixes },
      { path: "preferences", component: Preferences },
      { path: "social-authentication", component: Social_Authentication },
      { path: "language", component: Language_Settings },
    ]
  },
  {
    path: '/app-settings',
    component: App_Settings,
    children: [
      { path: '', redirect: '/app-settings/invoice-settings' },
      { path: "invoice-settings", component: Invoice_Settings },
      { path: "custom-fields", component: Custom_Fields },
    ]
  },
  {
    path: '/system-settings',
    component: System_Settings,
    children: [
      { path: '', redirect: '/system-settings/email-settings' },
      { path: "email-settings", component: Email_Settings },
      { path: "email-templates", component: Email_Templates },
      { path: "sms-settings", component: Sms_Settings },
      { path: "otp-settings", component: Otp_Settings },
      { path: "gdpr-cookies", component: Gdpr_Cookies },
    ]
  },
  {
    path: '/financial-settings',
    component: Financial_Settings,
    children: [
      { path: '', redirect: '/financial-settings/payment-gateways' },
      { path: "payment-gateways", component: Payment_Gateways },
      { path: "tax-rates", component: Tax_Rates },
    ]
  },
  {
    path: '/academic-settings',
    component: Academic_Settings,
    children: [
      { path: '', redirect: '/academic-settings/school-settings' },
      { path: "school-settings", component: School_Settings },
      { path: "religion", component: Religion },
    ]
  },
  {
    path: '/others-settings',
    component: Others_Settings,
    children: [
      { path: '', redirect: '/others-settings/storage' },
      { path: "storage", component: Storage_Settings },
      { path: "ban-ip-address", component: Ban_Ip_Address },
    ]
  },
  {
    path: '/accounts',
    component: Accounts_Index,
    children: [
      { path: '', redirect: '/accounts/expenses-list' },
      { path: "expenses-list", component: Expenses_List },
      { path: "expenses-category", component: Expenses_Category },
      { path: "accounts-income", component: Accounts_Income },
      { path: "accounts-invoices", component: Accounts_Invoices },
      { path: "invoice", component: Invoice },
      { path: "add-invoice", component: Add_Invoice },
      { path: "edit-invoice", component: Edit_Invoice },
      { path: "accounts-transactions", component: Accounts_Transactions },

    ]
  },
  {
    path: '/hrm',
    component: HRM_Index,
    children: [
      { path: '', redirect: '/hrm/staff-list' },
      { path: "staff-list", component: Staff_List },
      { path: "add-staff", component: Add_Staff },
      { path: "edit-staff", component: Edit_Staff },
      { path: "staff-details", component: Staff_Details },
      { path: "staff-leaves", component: Staff_Leaves },
      { path: "staffs-attendance", component: Staffs_Attendance },
      { path: "staff-payroll", component: Staff_Payroll },
      { path: "department-list", component: Department_List },
      { path: "designation-list", component: Designation_List },
      { path: "holiday-list", component: Holiday_List },
      { path: "payroll-list", component: Payroll_List },

    ]
  },
  {
    path: '/attendance',
    component: Attendance_Index,
    children: [
      { path: '', redirect: '/attendance/student-attendance' },
      { path: "student-attendance", component: Student_Attendance },
      { path: "teacher-attendance", component: Teacher_Attendance },
      { path: "staff-attendance", component: Staff_Attendance },

    ]
  },
  {
    path: '/leaves',
    component: Leaves_Index,
    children: [
      { path: '', redirect: '/leaves/list-leaves' },
      { path: "list-leaves", component: List_Leaves },
      { path: "approve-request", component: Approve_Request },

    ]
  },
  {
    path: '/fees',
    component: Fees_Index,
    children: [
      { path: '', redirect: '/fees/fees-group' },
      { path: "fees-group", component: Fees_Group },
      { path: "fees-type", component: Fees_Type },
      { path: "fees-master", component: Fees_Master },
      { path: "fees-assign", component: Fees_Assign },
      { path: "collect-fees", component: Collect_Fees },

    ]
  },
  {
    path: '/library',
    component: Library_Index,
    children: [
      { path: '', redirect: '/library/library-members' },
      { path: "library-members", component: Library_Members },
      { path: "library-books", component: Library_Books },
      { path: "library-return", component: Library_Return },
      { path: "library-issue-book", component: Library_Issue_Book },

    ]
  },
  {
    path: '/management',
    component: Management_Index,
    children: [
      { path: '', redirect: '/management/sports-list' },
      { path: "sports-list", component: Sports_List },
      { path: "player-list", component: Player_List },

    ]
  },
  {
    path: '/transport',
    component: Transport_Index,
    children: [
      { path: '', redirect: '/transport/transport-routes' },
      { path: "transport-routes", component: Transport_Routes },
      { path: "transport-pickup-points", component: Transport_Pickup_Points },
      { path: "transport-vehicle-drivers", component: Transport_Vehicle_Drivers },
      { path: "transport-vehicle", component: Transport_Vehicle },
      { path: "transport-assign-vehicle", component: Transport_Assign_Vehicle },

    ]
  },
  {
    path: '/hostel',
    component: Hostel_Index,
    children: [
      { path: '', redirect: '/management/hostel-list' },
      { path: "hostel-list", component: Hostel_List },
      { path: "hostel-rooms", component: Hostel_Rooms },
      { path: "hostel-room-type", component: Hostel_Room_Type },

    ]
  },
  {
    path: '/examinations',
    component: Exam_Index,
    children: [
      { path: '', redirect: '/examinations/exam-list' },
      { path: "exam-list", component: Exam_List },
      { path: "exam-schedule", component: Exam_Schedule },
      { path: "grade-list", component: Grade_List },
      { path: "exam-results", component: Exam_Results },
      { path: "exam-attendance", component: Exam_Attendance },

    ]
  },
  {
    path: '/students',
    component: Student_Index,
    children: [
      { path: '', redirect: '/students/student-list' },
      { path: "student-list", component: Student_List },
      { path: "student-grid", component: Student_Grid },
      { path: "student-details", component: Student_Details },
      { path: "add-student", component: Add_Student },
      { path: "edit-student", component: Edit_Student },
      { path: "student-time-table", component: Student_Time_Table },
      { path: "student-leaves", component: Student_Leaves },
      { path: "student-result", component: Student_Result },
      { path: "student-fees", component: Student_Fees },
      { path: "student-library", component: Student_Library },
      { path: "student-promotion", component: Student_Promotion },

    ]
  },
  {
    path: '/teachers',
    component: Teachers_Index,
    children: [
      { path: '', redirect: '/teachers/teacher-list' },
      { path: "teacher-list", component: Teacher_List },
      { path: "teacher-grid", component: Teacher_Grid },
      { path: "add-teacher", component: Add_Teacher },
      { path: "edit-teacher", component: Edit_Teacher },
      { path: "teacher-details", component: Teacher_Details },
      { path: "teacher-leaves", component: Teacher_Leaves },
      { path: "teacher-salary", component: Teacher_Salary },
      { path: "teacher-library", component: Teacher_Library },
      { path: "routine-teachers", component: Routine_Teachers },

    ]
  },
  {
    path: '/parents',
    component: Parents_Index,
    children: [
      { path: '', redirect: '/parents/parent-grid' },
      { path: "parent-grid", component: Parents_Grid },
      { path: "parents", component: Parents_List },
    ]
  },
  {
    path: '/guardians',
    component: Guardians_Index,
    children: [
      { path: '', redirect: '/guardians/guardian-grid' },
      { path: "guardian-grid", component: Guardian_Grid },
      { path: "guardians", component: Guardians_List },
    ]
  },
  {
    path: '/academic',
    component: Academic_Index,
    children: [
      { path: '', redirect: '/academic/class-room' },
      { path: "class-room", component: Class_Room },
      { path: "class-routine", component: Class_Routine },
      { path: "class-section", component: Class_Section },
      { path: "class-subject", component: Class_Subject },
      { path: "class-syllabus", component: Class_Syllabus },
      { path: "class-home-work", component: Class_Home_Work },
      { path: "class-time-table", component: Class_Time_Table },
      { path: "academic-reasons", component: Academic_Reasons },

    ]
  },
  {
    path: '/classes',
    component: Classes_Index,
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: '/classes/classes-list' },
      { path: "classes-list", component: Classes_List },
      { path: "schedule-classes", component: Schedule_Classes },

    ]
  },
  {
    path: '/application',
    component: Application,
    children: [
      { path: '', redirect: '/application/chat' },
      { path: "chat", component: Chat },
      { path: "call", component: AudioCall },
      { path: "calendar", component: Calendar },
      { path: "email", component: Email },
      { path: "todo", component: Todo },
      { path: "notes", component: Notes },
      { path: "file-manager", component: FileManager }
    ]
  },
  {
    path: '/call',
    component: Call,
    children: [
      { path: '', redirect: '/call/video-call' },
      { path: "video-call", component: VideoCall },
      { path: "call-history", component: CallHistory },
    ]
  },
  {
    path: '/icons',
    component: Icons,
    children: [
      { path: '', redirect: '/icons/icon-fontawesome' },
      { path: "icon-fontawesome", component: UI_Iconfontawesome },
      { path: "icon-feather", component: UI_Iconfeather },
      { path: "icon-ionic", component: UI_Iconionic },
      { path: "icon-material", component: UI_Iconmaterial },
      { path: "icon-pe7", component: UI_Iconpe7 },
      { path: "icon-simpleline", component: UI_Iconsimpleline },
      { path: "icon-themify", component: UI_Iconthemify },
      { path: "icon-weather", component: UI_Iconweather },
      { path: "icon-typicon", component: UI_Icontypicon },
      { path: "icon-flag", component: UI_Iconflag },
    ]
  },
  {
    path: '/baseui',
    component: BaseUi,
    children: [
      { path: '', redirect: '/baseui/ui-alerts' },
      { path: "ui-alerts", component: UI_Alerts },
      { path: "ui-accordion", component: UI_Accordion },
      { path: "ui-avatar", component: UI_Avatar },
      { path: "ui-badges", component: UI_Badges },
      { path: "ui-borders", component: UI_Borders },
      { path: "ui-buttons", component: UI_Buttons },
      { path: "ui-buttons-group", component: UI_Buttons_group },
      { path: "ui-breadcrumb", component: UI_Breadcrumb },
      { path: "ui-cards", component: UI_Cards },
      { path: "ui-carousel", component: UI_Carousel },
      { path: "ui-colors", component: UI_Colors },
      { path: "ui-dropdowns", component: UI_Dropdowns },
      { path: "ui-grid", component: UI_Grid },
      { path: "ui-images", component: UI_Images },
      { path: "ui-lightbox", component: UI_Lightbox },
      { path: "ui-media", component: UI_Media },
      { path: "ui-modals", component: UI_Modals },
      { path: "ui-offcanvas", component: UI_Offcanvas },
      { path: "ui-pagination", component: UI_Pagination },
      { path: "ui-popovers", component: UI_Popovers },
      { path: "ui-progress", component: UI_Progress },
      { path: "ui-placeholders", component: UI_Placeholders },
      { path: "ui-nav-tabs", component: Ui_Navtabs },
      { path: "ui-spinner", component: UI_Spinner },
      { path: "ui-sweetalerts", component: UI_Sweetalerts },
      { path: "ui-tooltips", component: UI_Tooltips },
      { path: "ui-typography", component: UI_Typography },
      { path: "ui-video", component: UI_Video },
    ]
  },
  {
    path: '/advancedui',
    component: Advancedui,
    children: [
      { path: '', redirect: '/advancedui/ui-ribbon' },
      { path: "ui-ribbon", component: UI_Ribbon },
      { path: "ui-clipboard", component: UI_Clipboard },
      { path: "ui-drag-drop", component: UI_Drag_Drop },
      { path: "ui-text-editor", component: UI_Text_Editor },
      { path: "ui-counter", component: UI_Counter },
      { path: "ui-scrollbar", component: UI_Scrollbar },
      { path: "ui-rating", component: UI_Rating },
      { path: "ui-stickynote", component: UI_Stickynote },
      { path: "ui-rangeslider", component: UI_Rangeslider },
      { path: "ui-timeline", component: UI_Timeline }
    ]
  },
  {
    path: '/tables',
    component: Tables,
    children: [
      { path: '', redirect: '/tables/data-tables' },
      { path: "data-tables", component: Data_Tables },
      { path: "tables-basic", component: Tables_Basic }
    ]
  },
  {
    path: '/charts',
    component: Charts,
    children: [
      { path: '', redirect: '/charts/chart-apex' },
      { path: "chart-apex", component: Chartapex },
      { path: "chart-c3", component: Chartc3 },
      { path: "chart-flot", component: Chartflot },
      { path: "chart-js", component: Chartjs },
      { path: "chart-morris", component: Chartmorris }
    ]
  },
  {
    path: '/forms',
    component: Forms,
    children: [
      { path: '', redirect: '/forms/form-basic-inputs' },
      { path: "form-basic-inputs", component: Formbasicinput },
      { path: "form-checkbox-radios", component: Formcheckboxradios },
      { path: "form-grid-gutters", component: Formgridgutters },
      { path: "form-input-groups", component: FormInput },
      { path: "form-select", component: Formselect },
      { path: "form-mask", component: Formmask },
      { path: "form-fileupload", component: Formfileupload },
      { path: "form-horizontal", component: FormHorizontal },
      { path: "form-vertical", component: Formvertical },
      { path: "form-floating-labels", component: Formfloatinglabels },
      { path: "form-validation", component: Formvalidation },
      { path: "form-select2", component: Formselect2 },
      { path: "form-elements", component: Formelements },
      { path: "form-wizard", component: Formwizard },
    ]
  },
  {
    path: '/reports',
    component: Report,
    children: [
      { path: '', redirect: '/reports/attendance-report' },
      { path: 'attendance-report', component: AttendanceReport },
      { path: 'student-attendance-type', component: StudentAttendanceType },
      { path: 'daily-attendance', component: Daily_Attendance },
      { path: 'student-day-wise', component: Student_Day_Wise },
      { path: 'teacher-day-wise', component: Teacher_Day_Wise },
      { path: 'teacher-report', component: Teacher_Report },
      { path: 'staff-day-wise', component: Staff_Day_Wise },
      { path: 'staff-report', component: Staff_Report },
      { path: 'class-report', component: Class_Report },
      { path: 'student-report', component: Student_Report },
      { path: 'grade-report', component: Grade_Report },
      { path: 'leave-report', component: Leave_Report },
      { path: 'fees-report', component: Fees_Report },
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      { path: '', redirect: '/dashboard/admin-dashboard' },
      {
        path: 'admin-dashboard',
        component: Admin_Dashboard,
      },
      { path: 'parent-dashboard', component: Parent_Dashboard },
      { path: 'student-dashboard', component: Student_Dashboard },
      { path: 'teacher-dashboard', component: Teacher_Dashboard },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
];

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes,
});


router.afterEach((to) => {
  if (to.name === "layout-rtl") {
    document.body.classList.add("layout-mode-rtl");
  } else {
    document.body.classList.remove("layout-mode-rtl");
  }
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Continue with the navigation
  if (to.meta.requiresAuth) {
    authGuard(to, from, next); // Check if the user is authenticated
  } else if (to.meta.requiresVerified) {
    authVerified(to, from, next); // Check if the user is varified
  } else {
    next(); // Proceed for routes without guards
  }
});

export default router;