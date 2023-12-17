import { Link } from 'react-router-dom';

/* eslint-disable no-unused-vars */
const FeedbackCard = ({ feedback }) => {
    console.log(feedback);
    return (
        <Link
            to={`/feedback/${feedback._id}`}
            className="bg-white/80 backdrop-blur-md shadow rounded-2xl p-4 min-h-[200px] flex flex-col gap-4 w-full"
        >
            <div className="flex flex-row gap-4">
                <div className="rounded-full overflow-hidden w-16 h-16">
                    <img src={feedback.createdBy.avatar} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                    <h2 className="text-lg">
                        <span className="font-semibold">{feedback.createdBy.fullname}</span> đã đăng một đánh giá với
                        món <span className="font-semibold">{feedback.foodName}</span>
                    </h2>
                    <span>
                        <span>Vào: </span>

                        <time className="font-semibold">
                            {new Date(feedback.createdBy.createdAt).toLocaleDateString()}
                        </time>
                    </span>
                </div>
            </div>

            <div>
                {'"'}
                {feedback.comment}
                {'"'}
            </div>
        </Link>
    );
};

export default FeedbackCard;
