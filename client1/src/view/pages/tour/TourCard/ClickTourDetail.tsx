import React, {Component} from 'react';
import axios from "axios";
import {RiMapPinLine, RiStarFill, RiMapPinTimeLine, RiUserLine, RiExchangeDollarLine} from 'react-icons/ri';

import '../../tour/TourCard/ClickTourDetail.css'
import ReviewForm from "./Review/ReviewForm";
import avarta from '../../../../images/avatar.jpg'
import {BookingForm} from "./Booking/BookingForm";


interface Review {
    name: string;
    rating: number;
}

export class ClickTourDetail extends Component {
    private api: any;

    constructor(props: Readonly<any>) {
        super(props);
        this.api = axios.create({baseURL: 'http://localhost:4000'});
        this.state = {
            data: [],
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
    handleReviewSubmit = async (review: { name: string; rating: number }) => {

        const tourId = this.extractTourIdFromPath();

        try {
            const stringTourId = tourId.toString();

            const updatedTour = await this.api.post(`/tour/addReviews/${stringTourId}`, review);
            this.setState({data: [updatedTour.data]});
        } catch (error) {
            console.log('Error submitting review', error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;


        // @ts-ignore
        return (
            <div className='flex flex-row w-full'>
                <div className="flex w-1/2  ml-32 mt-6">
                    {data.map((tour: any) => (
                        <div key={tour.id}>
                            <div className=" rounded">
                                <img src={require(`../../../../images/tourCard/${tour.photo}`)}
                                     alt=" "
                                     onError={(e) => console.error("Image error:", e)}
                                />
                            </div>
                            <div className="click-card  h-[16rem] mt-10 rounded flex-col ">
                                <h2 className="text-heading  font-bold  pt-4  ml-8 text-[20px]">{tour.title}</h2>


                                <span className=" ml-8 mt-2 flex">
                                   <RiStarFill className='text-secondary font-semibold '/>
                                    <h5 className="text-black text-[13px]">{tour.avgRating.toFixed(1)}</h5>
                                                    </span>
                                <div className='flex gap-6 mt-2 ml-8'>
                                <span className="flex">

                                   <RiMapPinLine className=' font-semibold size-4'/>
                                    <h5 className="text-black text-[13px]">{tour.city}</h5>
                                </span>
                                    <span className="flex ml-1">

                                   <RiExchangeDollarLine className='size-4 mr-1'/>
                                    <h5 className="text-black text-[13px]"> $ {tour.price} /per person</h5>
                                </span>
                                    < span className="flex">
                                    <RiMapPinTimeLine className='font-semibold size-4'/>
                                    <h5 className="text-black text-[13px]">{tour.duration}</h5>
                                </span>
                                    < span className="flex">
                                    <RiUserLine className='font-semibold size-4'/>
                                    <h5 className="text-black text-[13px]">{tour.maxGroupSize} people</h5>
                                </span>
                                </div>
                                <h2 className="text-heading  font-bold  pt-8  ml-8 text-[17px]">Description</h2>
                                <p className='ml-8 mt-1 text-[15px] w-3/4'>
                                    {tour.desc}
                                </p>

                            </div>
                            <div className="click-card h-[25rem] mt-10 rounded flex-col ">
                                <h2 className="text-heading font-bold pt-8 ml-8 text-[17px]">Reviews</h2>
                                <ReviewForm onSubmit={this.handleReviewSubmit}/>

                                <div className="">

                                    {tour.reviews.map((review: Review, index: number) => (
                                        <div key={index} className="mb-2 mt-4 ml-8 ">
                                            <div className='flex flex-row'>
                                                <div className='flex '>
                                                    <img src={avarta} className='w-[3rem] '/>
                                                </div>
                                                <span className='flex gap-4 ml-4 mt-4'>
                                                <strong>{review.name}</strong>
                                          <span className='text-secondary flex'>
                                               {review.rating}
                                              <RiStarFill className='mt-[3px]'/>
                                          </span>

                                            </span>

                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex  w-1/2 ml-20 mt-6' >
                <BookingForm/>
                </div>

            </div>
        );
    }
}

