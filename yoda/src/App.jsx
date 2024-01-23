import React from "react";
import { CssBaseline, Container, Grid } from "@mui/material";
import MainContent from "./components/MainContent";
import { StarWarsProvider } from "./context/StarWarsContext";
import "./App.css";

const App = () => {
    return (
        <StarWarsProvider>
            <CssBaseline />
            <Container>
                <Grid
                    container
                    direction="column"
                    style={{
                        height: "100vh",
                        width: "100%",
                        maxWidth: "1600px",
                    }}
                >
                    {/* Header */}
                    <Grid item style={{ flex: "0 0 20%" }}>
                        <div />
                    </Grid>

                    {/* Main Content */}
                    <Grid item container style={{ flex: "0 0 70%" }}>
                        <MainContent />
                    </Grid>

                    {/* Footer */}
                    <Grid item style={{ flex: "0 0 10%" }}>
                        <div />
                    </Grid>
                </Grid>
            </Container>
        </StarWarsProvider>
    );
};

export default App;
