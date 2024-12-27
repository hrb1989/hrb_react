function ListKey() {
    // const items = ['Samsung', 'iPhone', "Moto", 'Xiomi']
    const items = [
        {id:1, brand:'Samsung'}, 
        {id:2, brand:'iPhone'}, 
        {id:3, brand:"Moto"}, 
        {id:4, brand:'Xiomi'}
    ]
    return (
        <div>
            Testing Function Sample
            <br></br>
            <ul>
            {
                // items.map((item, index) => (
                items.map(item => (
                    <li key={item.id}>{item.brand}</li>
                ))
            }
            </ul>
        </div>
    );
}

export default ListKey;