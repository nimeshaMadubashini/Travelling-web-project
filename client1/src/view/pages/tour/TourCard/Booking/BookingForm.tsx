import {Component} from "react";
import axios from "axios";
import {RiStarFill} from 'react-icons/ri';


export class BookingForm extends Component {
    private api: any;

    constructor(props: Readonly<any>) {
        super(props);
        this.api = axios.create({baseURL: 'http://localhost:4000'});
        this.state = {
            data: [],
            subTotal:null,
            total:null,
            guests: 1,

        }
    }

    componentDidMount() {
        const tourId = this.extractTourIdFromPath();
        this.fetchData({id: tourId}).then(r => console.log(r));
    }

    extractTourIdFromPath() {
        const pathArray = window.location.pathname.split('/');
        return pathArray[pathArray.length - 1];
    }

    fetchData = async ({id}: { id: any }) => {
        try {
            this.api.get(`/tour/find/${id}`).then((res: { data: any }) => {
                console.log(res)
                const jsonData = res.data;
                console.log(jsonData); // Log the data received from the API
                this.setState({data: jsonData});
            }).catch((error: any) => {
                console.log("Axios error", error);
            });
        } catch (error) {
            console.log('Error fetching data', error);
        }
    }
    handleGuestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const guests = parseInt(event.target.value, 10);
        this.setState({ guests }, () => {
            this.calculateTotal();
        });
    };

    calculateTotal() {
        // @ts-ignore
        const { guests, data } = this.state;
        const tour = data[0];
        if (!guests || guests <= 0) {
            // Default guests to 1 if not defined or less than or equal to 0
            this.setState({ guests: 1 }, () => {
                if (tour && tour.price) {
                    const subtotal = tour.price * 1; // Calculate subtotal for 1 person
                    const total = subtotal + 10; // Assuming $10 service charge per person
                    this.setState({ subTotal: subtotal, total: total });
                }
            });
        } else {
            if (tour && tour.price) {
                const subtotal = tour.price * guests;
                const total = subtotal + 10 * guests; // Assuming $10 service charge per person
                this.setState({ subTotal: subtotal, total: total });
            }
        }
    }

    render() {
        // @ts-ignore
        const {data,subTotal,total,guests} = this.state

        return (
            <div>
                {data.map((tour: any) => {
                    return (
                        <div key={tour.id}>
                            <div className='flex w-full h-[35rem] flex-col '
                                 style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                            <span className='flex flex-row  h-20 ml-5 mr-5  '
                                  style={{boxShadow: ' rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'}}>
                            <h2 className='mt-8'><span className='font-bold text-2xl'>$ {tour.price}</span> /per person</h2>
                                <div className='flex ml-[9rem] mt-8 '>
                                <RiStarFill className='text-secondary mt-1'/>
                                    <h2 className=' '>{tour.avgRating.toFixed(2)}({tour.reviews.length})</h2>
                                       </div>
                            </span>
                                <div className='flex ml-5 mt-5 flex-col mr-5 w-[23rem]'>
                                    <h4 className='font-semibold text-[20px] '>Information</h4>
                                    <form className='flex flex-col mt-3 h-[12rem] gap-2'
                                          style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                                        <input type='text' placeholder='Full Name'
                                               className='outline-none w-[21rem] h-10  mt-2 ml-3 mr-3 border-b-2'/>
                                        <input type='number' placeholder='Phone'
                                               className='outline-none w-[21rem] h-10  mt-2 ml-3 mr-3 border-b-2'/>
                                        <div className='flex'>
                                            <input type='date'
                                                   className='outline-none w-[10rem] h-10  mt-2 ml-3 mr-3 border-b-2'/>
                                            <input type='Number' placeholder='Guest'
                                                   className='outline-none w-[10rem] h-10 mt-2 ml-3 mr-3 border-b-2'
                                                   onChange={this.handleGuestChange}/>

                                        </div>
                                    </form>
                                </div>
                                <div className='mt-6 w-[23rem] ml-5 mr-5'>
                                    <form className=' w-full flex flex-col gap-5 '>
                                        <label className=' text-black'>
                                            $ {tour.price} x {guests} person
                                            <input className='ml-[12rem] outline-none w-14' readOnly={true}
                                                   placeholder='$' value={subTotal}/>
                                        </label>
                                        <label className='text-black'>
                                            Service charge
                                            <input className='ml-[12rem] outline-none w-14' readOnly={true}
                                                   value='$10'/>
                                        </label>
                                        <label className='flex text-black font-semibold'>
                                            Total
                                            <input className='ml-[17rem] outline-none w-14 font-semibold'
                                                   readOnly={true}
                                                   placeholder='$' value={total}/>
                                        </label>
                                    </form>
                                </div>
                                <button type='button' className='primary__btn w-[23rem] ml-5 mr-5 text-white mt-5'>Book
                                    Now
                                </button>

                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}