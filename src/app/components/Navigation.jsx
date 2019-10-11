import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
    <div>
        <Link to="/dashboard">
            <h6>Dashboard</h6>
        </Link>
    </div>
);

export const ConnectedNavigation = connect(state => state) (Navigation);