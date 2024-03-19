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
        <Grid container spacing={2}>
            {currentUserGoals.map((goal, index) => (
                <Grid item key={index} xs={12} sm={12} md={12}>
                    <Paper
                        elevation={3}
                        sx={{
                            position: "relative",
                            maxWidth: 1000,
                            borderRadius: "10px",
                            backgroundColor: colors[index % colors.length],
                            minHeight: "200px",
                            padding: 2,
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="div"
                            color="text.primary"
                        >
                            {goal.title}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {goal.description}
                        </Typography>
                        <Button
                            variant="contained"
                            href={goal.link}
                            target="_blank"
                            sx={{ marginTop: 1 }}
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
