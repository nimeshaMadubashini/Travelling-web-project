import React, { Component } from 'react';
import axios from "axios";

export class ClickTourDetail extends Component {
    private api: any;

    constructor(props:Readonly<any>) {
        super(props);
        this.api = axios.create({ baseURL: 'http://localhost:4000' });
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

    fetchData = async ({ id }: { id: any }) => {
        try {
            this.api.get(`/tour/find/${id}`).then((res: { data: any }) => {
                console.log(res)
                const jsonData = res.data;
                console.log(jsonData); // Log the data received from the API
                this.setState({ data: jsonData });
            }).catch((error: any) => {
                console.log("Axios error", error);
            });
        } catch (error) {
            console.log('Error fetching data', error);
        }
    }

    render() {
        // @ts-ignore
        const { data } = this.state;



        return (
            <div>
                <div className="flex gap-6 flex-wrap ml-32">
                    {data.map((tour: any) => (
                        <div key={tour.id}>
                            <h3>Title: {tour.desc}</h3>
                            {/* Display other tour details here */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

