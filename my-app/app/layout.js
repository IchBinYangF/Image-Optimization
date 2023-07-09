"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
require("./globals.css");
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
exports.metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>);
}
exports.default = RootLayout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBc0I7QUFFdEIsNkNBQXdDO0FBRXhDLE1BQU0sS0FBSyxHQUFHLElBQUEsY0FBSyxFQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBRTlCLFFBQUEsUUFBUSxHQUFhO0lBQ2hDLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsV0FBVyxFQUFFLDhCQUE4QjtDQUM1QyxDQUFBO0FBRUQsU0FBd0IsVUFBVSxDQUFDLEVBQ2pDLFFBQVEsR0FHVDtJQUNDLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNiO01BQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUNwRDtJQUFBLEVBQUUsSUFBSSxDQUFDLENBQ1IsQ0FBQTtBQUNILENBQUM7QUFWRCw2QkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgTWV0YWRhdGEgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGEgPSB7XG4gIHRpdGxlOiAnQ3JlYXRlIE5leHQgQXBwJyxcbiAgZGVzY3JpcHRpb246ICdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+e2NoaWxkcmVufTwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiJdfQ==