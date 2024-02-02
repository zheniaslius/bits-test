import { useForm, SubmitHandler } from 'react-hook-form';
import { Review } from '../types';

type Inputs = {
  description: string;
  name: string;
  email: string;
  phone: string;
};

type Props = {
  onAdd: (data: Review) => void;
};

const Error = () => <span className="text-red-500">This field is required</span>;

const LeaveReview = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { onAdd } = props;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newData = {
      id: Math.random(),
      date: new Date('2024-01-26').toLocaleDateString(),
      ...data,
    };
    onAdd(newData);
  };

  return (
    <div className="text-left">
      <h3 className="text-2xl mb-3">Leave a Review</h3>
      <span className="mb-3 inline-block">
        Your email address will not be published. Required fields are marked *
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 ">
          <textarea
            rows={3}
            placeholder="Comment *"
            className="w-full p-2 border-2 border-cyan-900 border-opacity-25"
            {...register('description', { required: true })}
          />
          {errors.description && <Error />}
        </div>
        <div className="flex mb-5">
          <div className="w-full mr-6">
            <input
              type="text"
              placeholder="Name *"
              className="p-2 h-12 w-full border-2 border-cyan-900 border-opacity-25"
              {...register('name', { required: true })}
            />
            {errors.name && <Error />}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email *"
              className="w-full p-2 h-12 border-2 border-cyan-900 border-opacity-25"
              {...register('email', { required: true })}
            />
            {errors.email && <Error />}
          </div>
        </div>
        <input
          type="text"
          placeholder="Phone(optional)"
          className="w-full p-2 h-12 border-2 border-cyan-900 border-opacity-25"
          {...register('phone')}
        />
        <label className="text-gray-400 mt-2 inline-block">
          <input type="checkbox" className="mr-2" />
          Save my name, email
        </label>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-cyan-800 text-sm uppercase text-white py-2 min-w-[200px] rounded-full "
          >
            Post review
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveReview;
