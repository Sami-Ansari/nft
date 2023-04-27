import NFTCard from "components/NFTCard";
import Wrapper from "components/Wrapper";
import useNFTMarket from "state/nft-market";
import Image from "next/image";
import { programsData, programsData2 } from "../../../data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';

const HomePage = () => {

  SwiperCore.use([Autoplay])
  const { listedNFTs } = useNFTMarket();

  return (<>
    <Wrapper >
      <div className=" ">
        <div className="flex">
          <div className="flex-1 ">
            <h1 className='text-6xl font-bold mt-16 text-yellow-300 text-center ' >Create, Sell & Collect Your Own Creative NFT</h1>
            <p className="mt-6 text-4xl text-slate-300 text-center" >An NFT marketplace is a digital platform for buying and selling NFTs. These platforms allow people to store and display their NFTs plus sell them to others for cryptocurrency or money.</p>
          </div>

        </div>
        <Swiper className="mt-20"
          // spaceBetween={0}
          slidesPerView={3}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{
            delay: 2000
          }}
        >
          <SwiperSlide>
            <div className="flex  mt-14">
              {listedNFTs?.slice(0, 1).map((nft) => (
                <NFTCard nft={nft} className="  mr-1 lg:mr-3 mb-2" key={nft.id} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  mt-14">
              {listedNFTs?.slice(1, 2).map((nft) => (
                <NFTCard nft={nft} className="  mr-1 lg:mr-3 mb-2" key={nft.id} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  mt-14">
              {listedNFTs?.slice(2, 3).map((nft) => (
                <NFTCard nft={nft} className="  mr-1 lg:mr-3 mb-2" key={nft.id} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  mt-14">
              {listedNFTs?.slice(3, 4).map((nft) => (
                <NFTCard nft={nft} className="  mr-1 lg:mr-3 mb-2" key={nft.id} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex  mt-14">
              {listedNFTs?.slice(4, 5).map((nft) => (
                <NFTCard nft={nft} className="  mr-1 lg:mr-3 mb-2" key={nft.id} />
              ))}
            </div>
          </SwiperSlide>



        </Swiper>
        <div className="flex gap-x-48">
          <div className="">
            <h2 className="text-5xl mt-6 text-yellow-300 font-semibold">Trending </h2>
            <div className="flex justify-between ">
              <p className="mt-10 text-slate-300 text-2xl" >Collections</p>
              <p className="mt-10  text-slate-300 text-2xl" >Floor Price</p>

            </div>
            {/* left comp */}
            <div className="flex">
              <div className="  px-4 py-6 space-y-10 basis-1/12  flex-1 " >
                {
                  programsData.map((item, i) => (

                    <div key={i} className="flex gap-x-4 items-center cursor-pointer rounded-md">
                      <div className="flex-shrink-0 h-24 w-24 " >
                        {/* <div className="w-20 h-16 rounded bg-slate-400"></div> */}
                        <Image src={item.image} alt={item.header} className={"h-28 w-48 object-cover rounded-xl  "} />
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-xl font-semibold w-40 sm:w-80 text-slate-300 ">{item.header}</h3>
                        <h4 className="text-primary font-medium text-slate-300 ">{item.price}</h4>

                      </div>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="mt-20">
            {/* right comp */}
            <div className="flex justify-between ">
              <p className="mt-10 text-slate-300 text-2xl" >Collections</p>
              <p className="mt-10  text-slate-300 text-2xl" >Floor Price</p>

            </div>
            <div className="  px-4 py-6 space-y-10 basis-1/12  flex-1" >
              {
                programsData2.map((item, i) => (

                  <div key={i} className="flex gap-x-4 items-center cursor-pointer rounded-md">
                    <div className="flex-shrink-0 h-24 w-24 " >
                      {/* <div className="w-20 h-16 rounded bg-slate-400"></div> */}
                      <Image src={item.image} alt={item.header} className={"h-28 w-48 object-cover rounded-xl "} />
                    </div>
                    <div className="flex">
                      <h3 className="text-xl font-semibold w-40 sm:w-80 text-slate-300 ">{item.header}</h3>
                      <h4 className="text-primary font-medium text-slate-300  ">{item.price}</h4>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="flex  flex-col">
          <div className="flex flex-wrap mt-14">
            {listedNFTs?.map((nft) => (
              <NFTCard nft={nft} className="  mr-1 lg:mr-3 mb-2" key={nft.id} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  </>
  );
};

export default HomePage;
