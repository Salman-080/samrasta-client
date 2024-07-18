import { HiOutlineLockClosed, HiOutlineUserCircle } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { RxGlobe } from "react-icons/rx";

const Home = () => {
    return (
        <div className="max-w-screen-xl 2xl:max-w-[1700px] mx-auto ">
            <div className="text-center space-y-2 pt-6">
                <h2 className="text-4xl font-bold ">Project Samrasta</h2>
                <p className="text-gray-700">For Equality and Harmony</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-14 md:items-center ">
                <div className="space-y-2  md:pl-16 2xl:pl-36 pl-2  border-green-900">
                    <h2 className="text-2xl font-bold ">Our Ethos</h2>
                    <p className="text-gray-700">Samrasta, an intrinsic concept in Indian philosophy, encapsulates the essence of unity, equality, and harmony among all individuals regardless of their social, economic, or cultural backgrounds. It signifies the ideal of social integration, emphasizing the inter-connectedness and interdependence of all beings within society.
                        <br /> <br />
                        Samrasta promotes the recognition of diversity as a source of strength rather than division, advocating for mutual respect, understanding, and cooperation among people of different castes, religions, and ethnicities. It embodies the principle of inclusivity, striving for a society where every individual is treated with dignity and fairness.
                        <br /><br />
                        In our bid to raise awareness regarding the various problems that women face, and find possible solutions to them, we have started this initiative, called ‘Project Samrasta’, which aims to bridge the gap between the upper classes and the marginalised sections of the society, namely women.</p>
                </div>
                <div className="h-[300px] w-[290px] lg:h-[410px] lg:w-[460px]  mx-auto">
                    <img className="h-full w-full " src="/banner.png" alt="" />
                </div>
            </div>

            <div className="space-y-5 mt-16 md:pl-16 2xl:pl-36 pl-2  ">
                <h2 className="text-2xl font-bold">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-16">
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <RxGlobe className="h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] "></RxGlobe>
                            <h2>Interview Series </h2>
                        </div>
                        <div>
                            <p className=" md:mr-20 lg:mr-24">Conducting interviews with female leaders in various sectors to understand the challenges that they faced in their journey to success, and steps they took to overcome them</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <HiOutlineUserCircle className="h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] " />

                            <h2>Social Media</h2>
                        </div>
                        <div className="">
                            <p className=" md:mr-20 lg:mr-28 ">Maintaining this website, an Instagram account, posting on social media regularly


                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <HiOutlineLockClosed className="h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] " />

                            <h2>Fundraising </h2>
                        </div>
                        <div>
                            <p className=" md:mr-20 lg:mr-24">Organising fundraisers to support like education of girls, promotion of vocational learning, and art forms such as dance</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-1">
                            <IoCalendarOutline className="h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px] " />

                            <h2>Music</h2>
                        </div>
                        <div className="">
                            <p className=" md:mr-20 lg:mr-24">Using music as a medium to advocate against violence against women in conflict regions</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="grid grid-cols-1 md:grid-cols-2 mt-14 md:items-center">
                <div className="space-y-2 md:ml-12 ml-4">
                    <h2 className="text-xl font-bold ">Our Ethos</h2>
                    <p>Samrasta, an intrinsic concept in Indian philosophy, encapsulates the essence of unity, equality, and harmony among all individuals regardless of their social, economic, or cultural backgrounds. It signifies the ideal of social integration, emphasizing the inter-connectedness and interdependence of all beings within society.
                        <br /> <br />
                        Samrasta promotes the recognition of diversity as a source of strength rather than division, advocating for mutual respect, understanding, and cooperation among people of different castes, religions, and ethnicities. It embodies the principle of inclusivity, striving for a society where every individual is treated with dignity and fairness.
                        <br /><br />
                        In our bid to raise awareness regarding the various problems that women face, and find possible solutions to them, we have started this initiative, called ‘Project Samrasta’, which aims to bridge the gap between the upper classes and the marginalised sections of the society, namely women.</p>
                </div>
                <div className="h-[300px] w-[290px] lg:h-[410px] lg:w-[460px] ml-4 md:ml-12 lg:ml-10 xl:ml-20 2xl:ml-28  ">
                    <img className="h-full w-full " src="/banner.png" alt="" />
                </div>
            </div> */}



            {/* <div className="space-y-5 mt-12  ml-4 md:ml-12 border">
                <h2 className="text-xl font-bold">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <RxGlobe></RxGlobe>
                            <h2>Interview Series </h2>
                        </div>
                        <div>
                            <p>Conducting interviews with female leaders in various sectors to understand the challenges that they faced in their journey to success, and steps they took to overcome them</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <RxGlobe></RxGlobe>
                            <h2>Interview Series </h2>
                        </div>
                        <div>
                            <p>Conducting interviews with female leaders in various sectors to understand the challenges that they faced in their journey to success, and steps they took to overcome them</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <RxGlobe></RxGlobe>
                            <h2>Interview Series </h2>
                        </div>
                        <div>
                            <p>Conducting interviews with female leaders in various sectors to understand the challenges that they faced in their journey to success, and steps they took to overcome them</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <RxGlobe></RxGlobe>
                            <h2>Interview Series </h2>
                        </div>
                        <div>
                            <p>Conducting interviews with female leaders in various sectors to understand the challenges that they faced in their journey to success, and steps they took to overcome them</p>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className=" md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1270px] bg-white py-14 mx-auto text-center space-y-2 mb-12 mt-14">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <div className="text-gray-600">
                    <p>gmail- samrastayatra@gmail.com</p>
                    <p >In collaboration with- </p>
                </div>


            </div>
        </div>
    );
};

export default Home;