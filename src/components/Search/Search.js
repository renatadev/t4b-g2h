import React from "react";
import * as SC from "./Search.style.js";
import PropTypes from "prop-types";
import Filter from "../Filter/Filter";

const SearchPage = ({ searchResult, setSearchResult }) => {
  if (!searchResult) return <h1>No data yet</h1>;
  const searchRecords = searchResult.records;

  //shows records in grid view through mapping on each one and displaying it in 3 columns by X rows to as many as needed
  return (
    <>
      <Filter searchResult={searchResult} setSearchResult={setSearchResult} />
      {/* {console.log(searchResult)} */}
      <SC.SearchStyle>
        {searchRecords.map(record => (
          <SC.ContentContainer key={record.fields.image_id}>
            <SC.ImgContainer>
              <SC.ImgInContainer src={record.fields.url} />
            </SC.ImgContainer>
            <p data-testid="first">{record.fields.caption}</p>
          </SC.ContentContainer>
        ))}
      </SC.SearchStyle>
    </>
  );
};

SearchPage.propTypes = {
  searchResult: PropTypes.array,
  setSearchResult: PropTypes.object
};
export default SearchPage;
