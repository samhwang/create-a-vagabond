// vite.config.ts
import { defineConfig } from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/vite/dist/node/index.js";
import reactBabel from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/@vitejs/plugin-react/dist/index.mjs";
import reactSwc from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/@vitejs/plugin-react-swc/index.mjs";
import relay from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/vite-plugin-relay/dist/plugin.js";
var useSwc = true;
var react = (useSwc2) => {
  if (!useSwc2) {
    return reactBabel({
      babel: {
        presets: []
      }
    });
  }
  return reactSwc({});
};
var vite_config_default = defineConfig({
  plugins: [react(useSwc), relay],
  server: {
    proxy: {
      "/.netlify/functions": "http://0.0.0.0:8788"
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      enabled: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS95dWtpL0Rlc2t0b3AvcGVyc29uYWwvcHJvamVjdHMvY3JlYXRlLWEtdmFnYWJvbmQvY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS95dWtpL0Rlc2t0b3AvcGVyc29uYWwvcHJvamVjdHMvY3JlYXRlLWEtdmFnYWJvbmQvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3l1a2kvRGVza3RvcC9wZXJzb25hbC9wcm9qZWN0cy9jcmVhdGUtYS12YWdhYm9uZC9jbGllbnQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0QmFiZWwgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHJlYWN0U3djIGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XG5pbXBvcnQgcmVsYXkgZnJvbSAndml0ZS1wbHVnaW4tcmVsYXknO1xuXG4vLyBUT0dHTEUgVEhJUyBJRiBZT1UgU0VFIFNUUkFOR0UgQkVIQVZJT1IgSU4gWU9VUiBBUFAuXG4vLyBTZWUgUkVBRE1FIG9mIHBsdWdpbi1yZWFjdC1zd2M6IGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS1wbHVnaW4tcmVhY3Qtc3djXG5jb25zdCB1c2VTd2MgPSB0cnVlO1xuY29uc3QgcmVhY3QgPSAodXNlU3djOiBib29sZWFuKSA9PiB7XG4gIGlmICghdXNlU3djKSB7XG4gICAgcmV0dXJuIHJlYWN0QmFiZWwoe1xuICAgICAgYmFiZWw6IHtcbiAgICAgICAgcHJlc2V0czogW10sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlYWN0U3djKHt9KTtcbn07XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QodXNlU3djKSwgcmVsYXldLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy8ubmV0bGlmeS9mdW5jdGlvbnMnOiAnaHR0cDovLzAuMC4wLjA6ODc4OCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWydzcmMvc2V0dXBUZXN0cy50cyddLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGNBQWM7QUFDckIsT0FBTyxXQUFXO0FBSWxCLElBQU0sU0FBUztBQUNmLElBQU0sUUFBUSxDQUFDQSxZQUFvQjtBQUNqQyxNQUFJLENBQUNBLFNBQVE7QUFDWCxXQUFPLFdBQVc7QUFBQSxNQUNoQixPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUM7QUFBQSxNQUNaO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUVBLFNBQU8sU0FBUyxDQUFDLENBQUM7QUFDcEI7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxNQUFNLEdBQUcsS0FBSztBQUFBLEVBQzlCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2hDLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInVzZVN3YyJdCn0K