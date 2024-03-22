import React, { useContext } from "react";
import { Paper, Typography, Button, Grid } from "@mui/material";
import { PeopleContext } from "../../context/PeopleContext";

const GoalCard = () => {
    const { currentUserGoals } = useContext(PeopleContext);

    if (!Array.isArray(currentUserGoals) || currentUserGoals.length === 0) {
        return <p>No goals found.</p>;
    }
    const colors = [
        "#9c89b8",
        "#f0a6ca",
        "#EFC3E6",
        "#F0E6EF",
        "#B8BEDD",
        "#ffb5a7",
        "#b7e4c7",
    ];

    return (
        <Grid container spacing={1} sx={{ padding: 2 }}>
            {currentUserGoals.map((goal, index) => (
                <Grid item key={index} xs={12} sm={12} md={12}>
                    <Paper
                        elevation={0}
                        sx={{
                            position: "relative",
                            borderRadius: "10px",
                            backgroundColor: colors[index % colors.length],
                            padding: 2,
                        }}
                    >
                        <Typography variant="body1" color="text.primary">
                            {goal.sublabel}
                        </Typography>
                        <Typography variant="h4" color="text.primary">
                            {goal.description}
                        </Typography>
                        <Button
                            variant="contained"
                            href={goal.link}
                            target="_blank"
                            sx={{ marginTop: 5, borderRadius: "10px" }}
                        >
                            Complete
                        </Button>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default GoalCard;
