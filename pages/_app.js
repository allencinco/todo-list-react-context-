

import { TodoProvider } from "@/Component/TodoContext";
import "@/styles/globals.css"; 

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
