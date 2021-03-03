
const MoneyFormat = ({ value }) => {
    return (
        <div>
            {/* debug */}
            {/* {JSON.stringify({value}, null, 2)} */}

            Rp. {(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </div>
    );
}

export default MoneyFormat;