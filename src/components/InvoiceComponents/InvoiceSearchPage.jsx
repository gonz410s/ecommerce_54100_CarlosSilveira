import React, { useState } from 'react';
import InvoiceSearchForm from './InvoiceSearchForm';
import InvoiceSearchResult from './InvoiceSearchResult';

function InvoiceSearchPage() {
  const [searchCriteria, setSearchCriteria] = useState(null);

  const handleSearch = (type, value) => {
    setSearchCriteria({ type, value });
  };

  return (
    <div>
      <h1>Buscar Facturas</h1>
      <InvoiceSearchForm onSearch={handleSearch} />
      {searchCriteria && (
        <InvoiceSearchResult searchType={searchCriteria.type} searchValue={searchCriteria.value} />
      )}
    </div>
  );
}

export default InvoiceSearchPage;
