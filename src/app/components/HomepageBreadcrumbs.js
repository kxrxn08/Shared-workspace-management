import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function BasicBreadcrumbs() {
    return (
        // <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb"
        sx={{
            // marginLeft:"28px",
            // marginTop:"15px",
            margin:"15px 0 15px 28px"
        }}>
            <Link underline="hover" color="inherit" href="/">
                MUI
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
        // </div>
    );
}
