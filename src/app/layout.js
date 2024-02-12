
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import CheckLogoinComponent from "./checkLogin";
import { isLoggedIn } from "./(auth)/action";
import EmployeeLayout from "@/components/employeeLayout/EmployeeLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

let isUserLogged = null;

async function checkLogoin() {
  isUserLogged = await isLoggedIn();
  if (!isUserLogged) {
    // revalidatePath('/');
    redirect('/login')
  } else if (isUserLogged && isUserLogged !== "admin") {
    // revalidatePath('/');
    redirect('/employeeProfile')
  }
}

export default function RootLayout({ children }) {
  checkLogoin();
  return (
    <html lang="en">
      <body className={inter.className}>
        <CheckLogoinComponent />
        {
          isUserLogged === "admin" ? <>
            <Header />
            <div className="flex h-screen ">
              <Sidebar />
              <div className="bg-slate-50 w-full max-w-screen-3xl">
                {children}
              </div>
            </div>
          </> :
            isUserLogged && isUserLogged !== "admin" ?
              <EmployeeLayout children={children} userName={isUserLogged} /> :
              <>
                <div className="bg-slate-50 w-full max-w-screen-3xl">
                  {children}
                </div>
              </>

        }

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        // transition:Bounce
        />
      </body>
    </html >
  );
}
