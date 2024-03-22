import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import CardHeader2 from "@/components/CardHeader2";
import { sportsData } from "@/data/sportCardData";
import { eventData } from "@/data/eventsData";

export default function Home() {
  return (
    <main className="block container justify-center items-center w-full mx-auto p-4">

      <div className="container px-10 py-5 ">
        <h2 className="font-sans font-bold">
          Sports
        </h2>
      </div>

      <div className="container  lg:columns-5 md:columns-3 sm:columns-1 px-10 py-5">

        {/* <Card cardheader={<CardHeader />} />
        <Card cardheader={<CardHeader />} />
        <Card cardheader={<CardHeader />} />
        <Card cardheader={<CardHeader />} />
        <Card cardheader={<CardHeader />} /> */}

        {
          sportsData.map((card, index) => {

            return (
              <Card img_link={card.img_link} cardheader={<CardHeader title={card.title} events={card.num_events} sportType={card.sport_type} />} />
            )

          })
        }
      </div>
      <div className="container px-10 py-5 text-center">
        <a className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded shadow">See More</a>
      </div>


      <div className="container font-sans px-10 py-5 text-center">
        <h4 className="text-3xl font-bold">Collection Spotlights</h4>
        <p className="text-md font-sans text-sm p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh lectus. Vivamus pulvinar euismod ante ac ulLorem ipsum dolor sit amet, consectet
        </p>
      </div>


      <div className="container w-9/12 mx-auto  lg:columns-3 md:columns-2 sm:columns-1 px-15 py-5">


        {
          eventData.map((card, index) => {

            return (
              <Card img_link={card.img_link} cardheader={<CardHeader2 title={card.title} month={card.month} day={card.day_name} time={card.time} content={card.content} />} />
            )

          })
        }


        {/* <Card cardheader={<CardHeader2 />} />
        <Card cardheader={<CardHeader2 />} />
        <Card cardheader={<CardHeader2 />} /> */}
      </div>
    </main>
  );
}


{/* <CardHeader /> */ }
