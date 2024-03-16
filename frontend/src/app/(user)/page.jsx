import Link from "next/link";

export default function Home() {
  return <main className="text-3xl">
    <div class="bg-cover bg-no-repeat bg-center py-36" style={{ backgroundImage: "url('./images/banner-bg.jpg')" }}>
        <div class="container">
            <h2 class="text-3xl text-gray-800 font-medium mb-4 mr-20 capitalize">
                به سایت مهرنوش غلامی خوش آمدید
            </h2>

            <div class="mt-12">
                <Link href="/resume" class="bg-primary-900 border border-primary-900 text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary-900 mr-20">رزومه</Link>
            </div>
        </div>
    </div>
  </main>;
}
