/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { useForm } from 'react-hook-form';
import InputField from '../form/input-field';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import SelectField from '../form/select-field';

const foodList = [
    {
        label: 'Bánh rây',
        value: 'banh-ray',
    },
    {
        label: 'Bánh canh Bến Có',
        value: 'banh-canh-ben-co',
    },
    {
        label: 'Bánh tét Trà Cuôn',
        value: 'banh-tet-tra-cuon',
    },
    {
        label: 'Bún nước lèo',
        value: 'bun-nuoc-leo',
    },
    {
        label: 'Bún suông',
        value: 'bun-suong',
    },
    {
        label: 'Cá khoai',
        value: 'ca-khoai',
    },
];

const FeedbackForm = forwardRef(({ onFeedbackSubmit }, ref) => {
    const { handleSubmit, reset, control } = useForm({});

    const formRef = useRef();

    useImperativeHandle(ref, () => ({
        reset: () => {
            reset({
                foodName: '',
                comment: '',
                overview: '',
                making: '',
                enjoy: '',
                restaurant: '',
            });
        },
        focus: () => {
            formRef.current?.focus();
        },
    }));

    const onSubmit = (data) => {
        console.log(data);
        onFeedbackSubmit?.(data);
    };

    return (
        <section>
            <div>
                <h2 className="text-gray-100 font-semibold text-2xl mb-2">Bình luận và đánh giá</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6">
                    <SelectField
                        label="Món ăn bạn muốn đánh giá"
                        name="foodName"
                        control={control}
                        options={foodList}
                    />
                    <InputField
                        label="Nhận Xét Chung Về Món Ăn"
                        name="comment"
                        placeholder="Ví dụ: Đây là một món ăn đặc biệt mà tôi chưa từng biết. Bài viết hay, nó cho tôi cách nhìn mới về ẩm thực."
                        control={control}
                        ref={formRef}
                    />

                    <InputField
                        label="Khái quát chung"
                        name="overview"
                        placeholder="Ví dụ: Phần khái quát chung này viết hay, khiến cho tôi cảm nhận được đồ ăn như được hiện lên trước mắt mình."
                        control={control}
                    />

                    <InputField
                        label="Cách làm món ăn"
                        name="making"
                        placeholder="Ví dụ: Cách làm này ngon, đồ ăn có hương vị y như trong quán."
                        control={control}
                    />

                    <InputField
                        label="Thưởng thức"
                        name="enjoy"
                        placeholder="Ví dụ: Phần thưởng thức rất hay, làm cho món ăn rất có hồn."
                        control={control}
                    />

                    <InputField
                        label="Quán ăn"
                        name="restaurant"
                        placeholder="Ví dụ: Quán ăn này ngon. Phục vụ tốt. Giá cả hợp lí. Ăn ngon hợp khẩu vị."
                        control={control}
                    />

                    <div>
                        <button type="submit" className="outline-none px-4 py-2 rounded-lg bg-white/10 text-white">
                            Gửi đánh giá
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
});

export default FeedbackForm;
