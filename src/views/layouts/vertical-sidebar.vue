<template>
  <ul>
    <li v-for="item in side_bar_data" :key="item.title">
      <h6 class="submenu-hdr">
        <span>{{ item.title }}</span>
      </h6>
      <ul>
        <template v-for="menu in item.menu" :key="menu.menuValue">
          <li
            v-if="!menu.hasSubRoute"
            :class="{ active: isMenuActive(menu) }"
            :style="{
              display:
                menu.menuValue === 'Authentication' || menu.menuValue === 'Forms'
                  ? 'none'
                  : 'block',
            }"
          >
            <router-link v-if="menu.route" :to="menu.route" @click="expandSubMenus(menu)">
              <i :class="'ti ' + menu.icon"></i>
              <span>{{ menu.menuValue }}</span>
            </router-link>
            <template v-else>
              <span>{{ menu.menuValue }}</span>
              <!-- Handle non-link menu item display -->
            </template>
          </li>
          <li v-else class="submenu">
            <a
              href="javascript:void(0)"
              @click="expandSubMenus(menu)"
              :class="{
                subdrop: menu.showSubRoute,
                active: route_array[1] === menu.active_link,
              }"
            >
              <i :class="'ti ' + menu.icon"></i>
              <span>{{ menu.menuValue }}</span>
              <span class="menu-arrow"></span>
            </a>
            <ul :class="{ 'd-block': menu.showSubRoute, 'd-none': !menu.showSubRoute }">
              <li v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                <router-link
                  v-if="subMenu.route"
                  :to="subMenu.route"
                  :class="{
                    active:
                      currentPath === subMenu.active_link ||
                      currentPath === subMenu.active_link1 ||
                      currentPath === subMenu.active_link2 ||
                      currentPath === subMenu.active_link3 ||
                      currentPath === subMenu.active_link4 ||
                      currentPath === subMenu.active_link5 ||
                      currentPath === subMenu.active_link6,
                  }"
                >
                  {{ subMenu.menuValue }}
                </router-link>
                <template v-else>
                  <span>{{ subMenu.menuValue }}</span>
                  <!-- Handle non-link submenu item display -->
                </template>
                <ul
                  v-if="subMenu.subMenusTwo"
                  :class="{
                    'd-block': subMenu.showSubRoute,
                    'd-none': !subMenu.showSubRoute,
                  }"
                >
                  <li
                    v-for="subSubMenu in subMenu.subMenusTwo"
                    :key="subSubMenu.menuValue"
                  >
                    <router-link
                      v-if="subSubMenu.route"
                      :to="subSubMenu.route"
                      :class="{ active: currentPath === subSubMenu.active_link }"
                    >
                      {{ subSubMenu.menuValue }}
                    </router-link>
                    <template v-else>
                      <span>{{ subSubMenu.menuValue }}</span>
                      <!-- Handle non-link submenu item display -->
                    </template>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li v-if="menu.hasSubRouteTwo" class="submenu">
            <a
              href="javascript:void(0);"
              @click="openMenu(menu)"
              :class="{
                subdrop:
                  menu.menuValue === 'Application' ||
                  (menu.menuValue === 'Forms' && isMenuActive(menu)),
                active: isMenuActive(menu),
              }"
            >
              <i :class="'ti ' + menu.icon"></i>
              <span>{{ menu.menuValue }}</span>
              <span class="menu-arrow"></span>
            </a>

            <ul
              :class="{
                'd-block': openMenuItem === menu,
                'd-none': openMenuItem !== menu,
              }"
            >
              <template v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                <li v-if="!subMenus.customSubmenuTwo">
                  <router-link :to="subMenus.route" @click="expandSubMenus(subMenus)">{{
                    subMenus.menuValue
                  }}</router-link>
                </li>
                <template v-else-if="subMenus.customSubmenuTwo">
                  <li class="submenu">
                    <a
                      href="javascript:void(0);"
                      @click="openSubmenuOne(subMenus)"
                      :class="{
                        subdrop: showSubRoute === subMenus,
                        active: route_array[1] === subMenus.active_link,
                      }"
                    >
                      {{ subMenus.menuValue }}
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      :class="{
                        'd-block': showSubRoute === subMenus,
                        'd-none': showSubRoute !== subMenus,
                      }"
                    >
                      <li
                        v-for="subMenuTwo in subMenus.subMenusTwo"
                        :key="subMenuTwo.menuValue"
                      >
                        <router-link :to="subMenuTwo.route">{{
                          subMenuTwo.menuValue
                        }}</router-link>
                      </li>
                    </ul>
                  </li>
                </template>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>

<script>
import side_bar_data from "@/assets/json/sidebar-data.json";

export default {
  data() {
    return {
      side_bar_data: side_bar_data,
      openMenuItem: null,
      showSubRoute: null,
      route_array: [],
      multilevel: [false, false, false],
    };
  },
  methods: {
    expandSubMenus(menu) {
      this.side_bar_data.forEach((item) => {
        if (item.menu && Array.isArray(item.menu)) {
          item.menu.forEach((subMenu) => {
            if (subMenu !== menu) {
              subMenu.showSubRoute = false;
              subMenu.showSubRoute1 = false;
            }
          });
        }
      });
      menu.showSubRoute = !menu.showSubRoute;
      // Save the state to localStorage
      localStorage.setItem("openSubMenu", JSON.stringify(this.side_bar_data));
    },
    openMenu(menu) {
      this.openMenuItem = this.openMenuItem === menu ? null : menu;
      // Save the state to localStorage
      localStorage.setItem(
        "openMenuItem",
        this.openMenuItem ? this.openMenuItem.menuValue : null
      );
    },
    openSubmenuOne(subMenus) {
      this.showSubRoute = this.showSubRoute === subMenus ? null : subMenus;
      // Save the state to localStorage
      localStorage.setItem(
        "showSubRoute",
        this.showSubRoute ? this.showSubRoute.menuValue : null
      );
    },
    getCurrentPath() {
      this.route_array = this.$route.path.split("/");
      return this.$route.path;
    },
    restoreMenuState() {
      // Restore the state from localStorage
      const openMenuItem = localStorage.getItem("openMenuItem");
      const openSubMenu = localStorage.getItem("openSubMenu");

      if (openSubMenu) {
        this.side_bar_data = JSON.parse(openSubMenu);
      }

      if (openMenuItem) {
        this.openMenuItem = this.side_bar_data.find(
          (item) => item.menu && item.menu.some((menu) => menu.menuValue === openMenuItem)
        );
      }
    },
  },
  computed: {
    currentPath() {
      return this.getCurrentPath();
    },
    isMenuActive() {
      return (menu) => {
        if (menu.menuValue === "Application") {
          return (
            this.$route.path.startsWith("/application") || // Check if current route starts with '/application'
            this.$route.path.startsWith("/call") ||
            this.$route.path === menu.active_link ||
            this.$route.path === menu.active_link1 ||
            this.$route.path === menu.active_link2
          );
        } else {
          return (
            this.$route.path === menu.route ||
            this.$route.path === menu.active_link ||
            this.$route.path === menu.active_link1 ||
            this.$route.path === menu.active_link2 ||
            this.$route.path === menu.active_link3 ||
            this.$route.path === menu.active_link4 ||
            this.$route.path === menu.active_link5 ||
            this.$route.path === menu.active_link6
          );
        }
      };
    },
  },
  mounted() {
    this.restoreMenuState();
  },
};
</script>
