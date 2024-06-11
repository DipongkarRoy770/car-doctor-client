

const TableRow = ({ service, handleDelete, handleBookingConfirm }) => {
    //console.log(service)
    const { _id, service_img, customar, price, date, service_name, status } = service;
    console.log(service)

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask  w-16 h-16">
                            <img src={service_img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customar}</div>
                        <div className="text-sm opacity-50">{service_name}</div>
                    </div>
                </div>
            </td>
            <td>
                USDT {price}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{date}</td>
            <th>
                {status ? <span className="text-red-500 btn-success">Approved</span> : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default TableRow;