"use client";

import { DateTime } from "luxon";
import React from "react";

export default () => {
  const [details, setDetails] = React.useState<
    { label: string; description: string }[]
  >([]);

  React.useEffect(() => {
    const targetDate = DateTime.fromISO("2010-04-10T00:00:00.000", {
      zone: "Asia/Bangkok",
    });

    const update = () => {
      const currentDate = DateTime.now().setZone("Asia/Bangkok");
      const age = currentDate.diff(targetDate);

      const totalDays = age.as("days");
      const years = Math.floor(totalDays / 365);
      const remainingDays = totalDays - years * 365;
      const months = Math.floor(remainingDays / 30);
      const days = remainingDays - months * 30;
      const totalHours = age.as("hours");
      const totalMinutes = age.as("minutes");
      const totalSeconds = age.as("seconds");
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setDetails([
        {
          label: "จำนวนคนในห้อง",
          description: "39 คน",
        },
        {
          label: "ครูที่ปรึกษา 1",
          description: "นางสาวศุจินทรา  ทันงาน",
        },
        {
          label: "ครูที่ปรึกษา 2",
          description: "นางอนุสรณ์  มั่นสุวรรณ",
        },
        {
          label: "ห้องเรียน",
          description:
            "อาคาร 4 ชั้น 8 ห้อง 4803",
        },
        {
          label: "โรงเรียน",
          description: "โรงเรียนบุญวัฒนา",
        },
      ]);
    };
    update();
    setInterval(update, 1000);
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-auto pb-16">
        <h1
          className="text-4xl font-bold mx-4 mt-4 mb-1 cursor-text text-[#ffa42d]"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          About
        </h1>
        <p
          className="mx-8 mb-4 text-xl cursor-text"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          เกี่ยวกับห้อง
        </p>
        {details.map(
          (data: { label: string; description: string }, i: number) => (
            <div data-aos="fade-down" data-aos-delay={`${i * 50}`} key={i}>
              <div className="shadow-lg cursor-pointer transition rounded mx-auto p-4 my-1 w-[95%] bg-white/5 scale-[0.98] hover:bg-[#ffa42d] hover:scale-[1]">
                <label htmlFor={data.label} className="text-slate-500">
                  {data.label}
                </label>
                <p id={data.label} className="mx-2">
                  {data.description}
                </p>
              </div>
            </div>
          ),
        )}
        <div data-aos="fade-down" data-aos-delay={500}>
          <div className="shadow-lg cursor-pointer transition rounded mx-auto p-4 my-1 w-[95%] border border-[#ffa42d] bg-white/5 scale-[0.98] hover:bg-[#ffa42d] hover:border-transperent hover:scale-[1]">
            <label htmlFor="eiei">👀</label>
            <p id="eiei" className="mx-2">
            สี่ทับสิบเอ็ดไม่หมูอาบูดาบี
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
