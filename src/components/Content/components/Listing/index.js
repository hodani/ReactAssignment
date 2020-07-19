import React, {useState} from "react";
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import Card from './components/Card';

export default (props) => {
    const [filter, setFilter] = useState({});
    const [page, setPage] = useState(1);

    const itemsFiltered = props.results
        .filter(v => v.gender === filter.gender || !filter.gender);

    const itemsToShow = itemsFiltered
        .slice((page - 1 ) * 10, page * 10);

    return (
        <React.Fragment>
            <Filters filter={filter} setFilter={setFilter} />
            {
                itemsToShow.map(v => (
                    <Card key={v.id.value} gender={v.gender}>
                        <div>
                            <img src={v.picture.medium} alt=""/>
                        </div>
                        <div>
                            <div><strong>{v.name.title} {v.name.first} {v.name.last}</strong></div>
                            <div>Location: <strong>{v.location.postcode}</strong> {v.location.city}, {v.location.state}, {v.location.country}</div>
                            <div>Prime numbers found in the postcode: {v.primesInPostcode.join(', ')}</div>
                        </div>
                    </Card>
                ))
            }
            <Pagination page={page} pages={Math.ceil(itemsFiltered.length/10)} setPage={setPage} />
        </React.Fragment>
    );
}