import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import buildConfig from "./buildconfig.json";
import HospitalList from "./pages/hospital-list";
import HospitalUnits from "./pages/hospital-units";
import HospitalDetail from "./pages/hospital-detail";
import HospitalQuestionnaire from "./pages/hospital-questionnaire";
import QuestionnaireSummary from "./pages/questionnaire-summary";
import ManageAccountSearch from "./pages/admin/manage-account-search";
import SearchResult from "./pages/admin/search-result";
import AccountPermissions from "./pages/admin/account-permissions";
import Login from "./pages/login";
import AdminLandingPage from "./pages/admin/admin-landing-page";


function App() {
  const { buildDate } = buildConfig;

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/hospitalList" element={<HospitalList />} />
          <Route
            path="/hospitalUnits/:id"
            element={<HospitalUnits />}
          />
          <Route
            path="/hospitalDetail/:id"
            element={<HospitalDetail />}
          />
          <Route
            path="/questionnaireSummary/:id"
            element={<QuestionnaireSummary />}
          />
          <Route
            path="/hospitalQuestionnaire/:id"
            element={<HospitalQuestionnaire />}
          />
          <Route path="/admin" element={<AdminLandingPage />} />
          <Route
            path="/admin/manageAccountSearch"
            element={<ManageAccountSearch />}
          />
          <Route
            path="/admin/searchResult"
            element={<SearchResult />}
          />
          <Route
            path="/admin/accountPermissions/:id"
            element={<AccountPermissions />}
          />
        </Routes>
      </main>
      <div className="app-footer">
        <Footer buildDate={buildDate} />
      </div>
    </>
  );
}

export default App;
