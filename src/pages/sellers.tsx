import { seller } from "@prisma/client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type CardProps = {
  seller: seller;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderRadius: "16px"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    marginTop: "16px"
  },
  button: {
    backgroundColor: "#61C9A8",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#5BB59F"
    }
  }
});

const SellerCard: React.FC<CardProps> = ({ seller }) => {
  const [showDetails, setShowDetails] = useState(false);
  const classes = useStyles();

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          {seller.seller_name}
        </Typography>
        {showDetails && (
          <>
            <Typography className={classes.description}>
              {seller.seller_description}
            </Typography>
            <Typography className={classes.description}>
              {seller.location}
            </Typography>
            <Typography className={classes.description}>
              {seller.usertype}
            </Typography>
          </>
        )}
      </CardContent>
      <Button
        className={classes.button}
        onClick={handleShowDetails}
        variant="contained"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>
    </Card>
  );
};

const SellersPage: NextPage = () => {
  const sellersList = api.sellers.listSellers.useQuery();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Walu Maydi3 | Our Sellers</title>
        <meta name="description" content="OUR SELLERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col gap-12 bg-gray-100 p-4">
        <h1 className="text-4xl text-green-500 font-bold mb-1" style={{ fontFamily: "Times New Roman"} }>Sellers</h1>
        <p className="text-sm text-gray-500 mb-2 italic"> Best sellers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sellersList.isSuccess &&
            sellersList.data.map((seller) => (
              <SellerCard key={seller.seller_id} seller={seller} />
            ))}
        </div>
      </main>
    </>
  );
};

export default SellersPage;