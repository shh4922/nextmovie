import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
    title: "Not found",
  };
export default function NotFound() {

    return (
        <div>
            <Navigation/>
            <h1 className="title" style={{ color: 'green', fontSize: '50px' }}>잘못된 접근인듯</h1>
        </div>
    )
}