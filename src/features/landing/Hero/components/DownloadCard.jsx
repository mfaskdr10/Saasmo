import React from "react";
// 1. Import komponen Swiper dan SwiperSlide
import { Swiper, SwiperSlide } from "swiper/react";

// 2. Import CSS Swiper yang dibutuhkan
import "swiper/css";
import "swiper/css/pagination";

// 3. Import modul yang dibutuhkan (Pagination untuk titik-titik navigasi)
import { Pagination, Autoplay } from "swiper/modules";
import Download from "@/components/icon/Download";
import { getTextColor } from "@/utils/getTextColor";

const StatCard = ({ total, label, color }) => {
  const textColorClass = getTextColor(color);
  return (
    // Container Kartu (Warna Hijau Neon)
    <div
      className={`relative p-6 rounded-3xl flex flex-col justify-between overflow-hidden shadow-sm`}
      style={{ backgroundColor: color }}
    >
      {/* Bagian Atas: Label dan Icon */}
      <div className="flex justify-between items-start">
        <h3 className={`${textColorClass} text-body-xs md:text-title-s font-medium`}>
          {label}
        </h3>

        {/* Lingkaran Putih dengan Icon */}
        <div className="bg-white rounded-full p-1.5 md:p-2.75 shadow-sm flex items-center justify-center">
          <Download className="text-deep-violet" />
        </div>
      </div>

      {/* Bagian Bawah: Angka Besar */}
      <div className="">
        <h2 className={`${textColorClass} md:text-display-s text-display-xs font-bold`}>
          {total}
        </h2>
      </div>

      {/* Dekorasi/Spacer agar pagination tidak menabrak text (Opsional) */}
      <div className="h-2"></div>
    </div>
  );
};

export default function DownloadSwiper() {
  return (
    <div className="xs:w-[45%] md:w-80 mx-auto border-4 md:border-8 border-white rounded-4xl bg-white absolute top-190 right-10 md:top-110 md:left-50 md:right-0 shadow-2xl">
      <Swiper
        // Konfigurasi Module
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          // Class khusus untuk styling titik-titik
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 3500, // Waktu tunggu per slide (2.5 detik)
          disableOnInteraction: false, // Autoplay tetap jalan meski user menggeser manual
          pauseOnMouseEnter: true,
        }}
        className="rounded-[30px]" // Rounded container swiper
        style={{
          "--swiper-pagination-color":
            "#F1F2FF" /* Warna Titik AKTIF (Merah) */,
          "--swiper-pagination-bullet-inactive-color":
            "#999999" /* Warna Titik MATI (Abu) */,
          "--swiper-pagination-bullet-inactive-opacity":
            "0.5" /* Transparansi Titik Mati */,
          "--swiper-pagination-bullet-size": "6px" /* Ukuran Titik */,
          "--swiper-pagination-bullet-horizontal-gap":
            "2px" /* Jarak antar titik */,
        }}
      >
        {/* Slide 1 (Sesuai Gambar) */}
        <SwiperSlide>
          <StatCard label="Total Download" total="1.2m" color="#D8FA50" />
        </SwiperSlide>

        {/* Slide 2 (Contoh lain) */}
        <SwiperSlide>
          <StatCard label="Active Users" total="850k" color="#1E0A52" />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <StatCard label="Total Revenue" total="$4.5m" color="#5F5F86" />
        </SwiperSlide>

        {/* Container Custom Pagination (Posisi di kanan bawah) */}
        <div className="custom-pagination flex justify-end gap-1 pr-6 pb-6 absolute bottom-0 right-0 z-10"></div>
      </Swiper>
    </div>
  );
}
