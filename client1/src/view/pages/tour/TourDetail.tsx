import { Component } from "react";
import {TourCard} from "./TourCard/TourCard";
import axios from "axios";

export class TourDetail extends Component {
    private api:any;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:'http://localhost:4000'})
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData().then(r => console.log(r));
    }

    fetchData = async (): Promise<void> => {
        try {

            this.api.get('/tour/allTourCard').then((res: { data: any }) => {
                const jsonData = res.data;
                this.setState({data: jsonData})

            }).catch((error: any) => {
                console.log("Axios error")
            })
        } catch (error) {
            console.log('Error fetching data', error)
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;

        return (
            <div className="flex gap-6 flex-wrap ml-32">
                {
                    data.map((tour: any) => (
                        <TourCard key={tour.id} data={tour}/>
                    ))
                }
            </div>
        );
    }
}