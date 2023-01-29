// vite.config.ts
import { defineConfig } from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/vite/dist/node/index.js";
import reactBabel from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/@vitejs/plugin-react/dist/index.mjs";
import jotaiBabel from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/jotai/esm/babel/preset.mjs";
import reactSwc from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/@vitejs/plugin-react-swc/index.mjs";
import relay from "file:///home/yuki/Desktop/personal/projects/create-a-vagabond/node_modules/vite-plugin-relay/dist/plugin.js";
var useSwc = true;
var react = (useSwc2) => {
  if (!useSwc2) {
    return reactBabel({
      babel: {
        presets: [jotaiBabel]
      }
    });
  }
  return reactSwc({
    plugins: [
      ["@swc-jotai/debug-label", {}],
      ["@swc-jotai/react-refresh", {}]
    ]
  });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS95dWtpL0Rlc2t0b3AvcGVyc29uYWwvcHJvamVjdHMvY3JlYXRlLWEtdmFnYWJvbmQvY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS95dWtpL0Rlc2t0b3AvcGVyc29uYWwvcHJvamVjdHMvY3JlYXRlLWEtdmFnYWJvbmQvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3l1a2kvRGVza3RvcC9wZXJzb25hbC9wcm9qZWN0cy9jcmVhdGUtYS12YWdhYm9uZC9jbGllbnQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0QmFiZWwgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGpvdGFpQmFiZWwgZnJvbSAnam90YWkvYmFiZWwvcHJlc2V0JztcbmltcG9ydCByZWFjdFN3YyBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHJlbGF5IGZyb20gJ3ZpdGUtcGx1Z2luLXJlbGF5JztcblxuLy8gVE9HR0xFIFRISVMgSUYgWU9VIFNFRSBTVFJBTkdFIEJFSEFWSU9SIElOIFlPVVIgQVBQLlxuLy8gU2VlIFJFQURNRSBvZiBwbHVnaW4tcmVhY3Qtc3djOiBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUtcGx1Z2luLXJlYWN0LXN3Y1xuY29uc3QgdXNlU3djID0gdHJ1ZTtcbmNvbnN0IHJlYWN0ID0gKHVzZVN3YzogYm9vbGVhbikgPT4ge1xuICBpZiAoIXVzZVN3Yykge1xuICAgIHJldHVybiByZWFjdEJhYmVsKHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHByZXNldHM6IFtqb3RhaUJhYmVsXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVhY3RTd2Moe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIFsnQHN3Yy1qb3RhaS9kZWJ1Zy1sYWJlbCcsIHt9XSxcbiAgICAgIFsnQHN3Yy1qb3RhaS9yZWFjdC1yZWZyZXNoJywge31dLFxuICAgIF0sXG4gIH0pO1xufTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCh1c2VTd2MpLCByZWxheV0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnLy5uZXRsaWZ5L2Z1bmN0aW9ucyc6ICdodHRwOi8vMC4wLjAuMDo4Nzg4JyxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiBbJ3NyYy9zZXR1cFRlc3RzLnRzJ10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixPQUFPLFdBQVc7QUFJbEIsSUFBTSxTQUFTO0FBQ2YsSUFBTSxRQUFRLENBQUNBLFlBQW9CO0FBQ2pDLE1BQUksQ0FBQ0EsU0FBUTtBQUNYLFdBQU8sV0FBVztBQUFBLE1BQ2hCLE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyxVQUFVO0FBQUEsTUFDdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBRUEsU0FBTyxTQUFTO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFBQSxNQUM3QixDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFBQSxJQUNqQztBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sTUFBTSxHQUFHLEtBQUs7QUFBQSxFQUM5QixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCx1QkFBdUI7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxtQkFBbUI7QUFBQSxJQUNoQyxVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJ1c2VTd2MiXQp9Cg==
