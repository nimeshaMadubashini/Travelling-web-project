import React, { Component } from "react";
import { Reviews } from "./Reviews";
/*
import Slider from "react-slick"
*/

export class ReviwesMain extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (): Promise<void> => {
        try {
            const response: Response = await fetch('reviews.json');
            const jsonData = await response.json();
            this.setState({ data: jsonData });
        } catch (error) {
            console.log("Error fetching Data", error);
        }
    };

    render() {
        // @ts-ignore
        const { data } = this.state;
/*
        const setting={
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        }
*/
        return (
/*
            <Slider {...setting}>
*/

                <div className='flex gap-3'>
                    {data.map((review: any) => (
                        <Reviews key={review.id} data={review} />
                    ))}
                </div>


        );
    }
}
