import React from "react";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section class="grid grid-cols-1 items-center sm:grid-cols-2 space-x-14 xl:space-x-24">
        <div>
          <img src="./images/Img-about-header.svg" alt="" />
        </div>
        <div>
          <img
            class="relative xl:top-10 xl:right-16 top-8 right-12"
            src="./images/stars-icon-2.svg"
            alt=""
          />
          <h1 class="text-[40px] xl:text-[68px] font-bold">About US</h1>
          <hr class="w-[140px] bg-[#a851f1] h-[5px] rounded border-none" />
          <p class="mt-[20px] about-para xl:mr-[250px] mr-10">
            A team of passionate designers and NFT enthusiasts. At your service.
            Our clients call us “great artists and crazy-good NFT experts”.
          </p>
        </div>
      </section>

      <section class="grid grid-cols-1 items-center mx-12 xl:mx-48 sm:grid-cols-2 mt-16 xl:mt-0">
        <div>
          <h2 class="text-[35px] xl:text-[45px] font-bold">
            Our
            <span class="bg-gradient-to-r from-[#5BC5D6] via-[#6077EC] to-[#A851F1] inline-block text-transparent bg-clip-text">
              Mission
            </span>
          </h2>
          <p class="text-center xl:text-left text-[20px] xl:text-[30px] mt-[20px]">
            We want to bring financial
            <span class="text-[#5BC5D6]"> freedom </span> to people who have
            <span class="text-[#6077EC]"> fascinating ideas </span> but
            <span class="text-[#A851F1]"> lack design skills </span> and NFT
            knowledge. Together, we can make your entry into the world of NFTs
            wildly <span class="text-[#5BC5D6]"> successfully </span> and
            <span class="text-[#6077EC]"> purely profitable </span>!
          </p>
        </div>
        <div class="flex m-auto mx-0">
          <img src="./images/Group 10434.svg" alt="" />
        </div>
      </section>

      <section class="xl:mt-[100px] mt-0 xl:mx-0 mx-[10px]">
        <div class="text-center">
          <p class="xl:text-[20px] text-[18px]">
            Ready to Bring Your Dream NFT to Life?
          </p>
          <h2 class="xl:text-[45px] text-[35px] bg-gradient-to-r from-[#5BC5D6] via-[#6077EC] to-[#A851F1] inline-block text-transparent bg-clip-text mt-[20px]">
            Get In Touch With Us Today!
          </h2>
        </div>
      </section>

      <section class="grid xl:grid-cols-2 grid-cols-1 mt-[100px]">
        <div class="flex justify-center">
          <h2 class="text-[35px] font-bold">
            Join the NFT
            <br />
            <span class="bg-gradient-to-r from-[#5BC5D6] via-[#6077EC] to-[#A851F1] inline-block text-transparent bg-clip-text">
              Creators Club
            </span>
          </h2>
        </div>
        <div class="flex flex-col items-center xl:mt-0 mt-[10px]">
          <input
            class="w-[270px] bg-[#302f3f] text-sm py-[13px] px-[20px] rounded"
            placeholder="weare@all.gm"
            type="e-mail"
          />
          <button class="footer-button mt-[20px] w-[270px]">
            Accept Invitation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
