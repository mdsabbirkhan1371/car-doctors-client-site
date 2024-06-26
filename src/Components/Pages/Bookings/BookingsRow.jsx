import PropTypes from 'prop-types';
const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, service, price, email, status } = booking;
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>
        {service}
        <br />
      </td>
      <td>{email}</td>
      <td>${price}</td>
      <th>
        {status ? (
          <span className="text-primary font-semibold">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsRow;

BookingsRow.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
  handleBookingConfirm: PropTypes.func,
};
