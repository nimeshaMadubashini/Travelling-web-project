import React, { Component } from 'react';
import { RiStarFill } from 'react-icons/ri';


interface ReviewFormProps {
    onSubmit: (review: { name: string;  rating: number }) => Promise<void>,
}

class ReviewForm extends Component<ReviewFormProps> {
    constructor(props: ReviewFormProps) {
        super(props);
        this.state = {
            name: '',
            rating: null,
        };
    }

    handleSubmit = () => {
        // @ts-ignore
        const { name, rating } = this.state;

        if (!name || rating === null) {
            alert('Please fill in all fields');
            return;
        }

        this.props.onSubmit({ name, rating });

        this.setState({ name: '', rating: null });
    };

    handleNameChange = (e: { target: { value: any } }) => {
        this.setState({ name: e.target.value });
    };



    handleStarClick = ({ selectedRating }: { selectedRating: any }) => {
        this.setState({ rating: selectedRating });
    };

    renderStars = () => {
        // @ts-ignore
        const { rating } = this.state;

        return Array.from({ length: 5 }, (_, index) => {
            const starRating = index + 1;
            return (
                <div key={starRating}>
          <span
              className={`flex ${rating >= starRating ? 'text-secondary font-semibold' : ''}`}
              onClick={() => this.handleStarClick({ selectedRating: starRating })}
          >
            <h5 className='text-[#ffbf00] font-semibold'>{starRating}</h5>
            <RiStarFill className='mt-1' />
          </span>
                </div>
            );
        });
    };

    render() {
        // @ts-ignore
        const { name } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className='ml-8 pt-5'>
                <label>
                    <div className='flex flex-row gap-4 '>{this.renderStars()}</div>
                </label>
                <div className='w-[35rem] h-[4rem] mt-4 border-amber-300 border-2 rounded-[30px]'>
                    <label className='float-left mt-4 ml-2'>
                        <input type='text' value={name} onChange={this.handleNameChange}
                               placeholder='Your Name : share your thoughts'
                               className='w-[21rem] h-[2rem] outline-none '/>
                    </label>

                    <button
                        className='float-right mr-2 mt-3 primary__btn text-[15px] text-white font-semibold'
                        type='button'
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default ReviewForm;
