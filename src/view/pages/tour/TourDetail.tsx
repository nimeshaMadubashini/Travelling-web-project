import { Component } from "react";
import {TourCard} from "./TourCard/TourCard";

export class TourDetail extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (): Promise<void> => {
        try {

            const response: Response = await fetch('tourCard.json');
            const jsonData = await response.json();
            this.setState({data: jsonData})
        } catch (error) {
            console.log("Error fetching Data", error)
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;

        return (
            <div>
                {
                    data.map((tour: any) => (
                        <TourCard key={tour.id} data={tour}/>
                    ))
                }
            </div>
        );
    }
}