import {Component} from "react";
import hero1 from '../../../images/hero4.jpg'
import world from '../../../images/icons8-travelling-64.png'
import hero2 from '../../../images/maldives-island.jpg'
import hero3 from '../../../images/hero5.jpg'
import {SearchBar} from "./common/SearchBar/SearchBar";
import {Service} from "./common/Service/Service";

export class Home extends Component {
    constructor(props:{} | Readonly<{}>) {
    super(props);
    this.state={
        data:[],
    }
}
    componentDidMount() {
        this.fetchData();
    }

    fetchData=async ():Promise<void>=>{
    try {

        const response: Response = await fetch('service-data.json');
        const jsonData = await response.json();
        this.setState({data: jsonData})
    }catch (error){
        console.log("Error fetching Data",error)
    }
}


    render() {
        // @ts-ignore
        const {data}= this.state;

        return (
            <>
                <section>
                    <div className="flex">
                        <div className="w-1/2 ">
                            <div className=" flex justify-center  flex-col items-center ">
                                <div className="flex">
                                    <div className="bg-amber-300 h-10 w-60  mt-2 rounded-3xl shadow-2xl">
                                        <p className="text-center mt-2 font-a ">Know Before you Go</p>
                                    </div>
                                    <img src={world} alt=""/>
                                </div>
                                <div className="flex justify-center flex-col items-center  w-65">
                                    <h1 className="ml-12 text-[25px] text-heading font-semibold ">Unlock the Door to
                                        Endless
                                        <br/>
                                        <span className="text-secondary">Memories</span></h1>
                                    <p className="items-center justify-center ml-[130px]"> "Embark on a Journey of
                                        Discovery with <i>Travel Explore</i>.
                                        Immerse yourself in breathtaking landscapes, vibrant cultures, and unforgettable
                                        adventures. Our curated travel experiences promise to elevate your wanderlust,
                                        offering a seamless blend of luxury and exploration. Explore the world with us
                                        and
                                        create memories that last a lifetime. Your next adventure begins here. Where
                                        will
                                        your wanderlust take you?"</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex gap-5 w-1/2 ml-4">
                            <div>
                                <img src={hero1} alt="" className="w-40 h-70 rounded-2xl border-b-emerald-950"/>
                            </div>
                            <div>
                                <img src={hero2} alt="" className="mt-8 w-40 h-70 rounded-2xl border-b-emerald-950"/>
                            </div>
                            <div>
                                <img src={hero3} alt="" className="mt-16 w-40 h-70 rounded-2xl border-b-emerald-950"/>
                            </div>

                            {/*<video controls className="w-full h-auto rounded-2xl border-b-emerald-950">
                                <source src={videoSource} type="video/mp4"/>
                            </video>*/}

                        </div>

                    </div>
                    <div>
                        <SearchBar/>

                    </div>
                </section>
                <section>
                    <div className="flex">
                            <div className="ml-32 w-[12.5rem] " >
                                <h5 className='font-subtitleFont text-[30px] text-red-700 '>What we serve
                                </h5>
                                <h2 className='text-[28px] text-heading font-semibold'>We offer our best services</h2>
                            </div>
<div className="flex">
    {
        data.map((service:any)=>(
            <Service key={service.id} data={service}/>
        ))
    }
</div>
                        </div>
                </section>
            </>
        );
    }

}