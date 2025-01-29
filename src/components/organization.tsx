import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Organization = () => {
  return (
    <Box sx={{ py: 2, px: 15 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Organizasyon Şeması
      </Typography>

      {/* Denetim Kurulu */}
      <Box
        sx={{
          border: "2px solid rgba(237, 27, 36, 0.7)",
          borderRadius: 3,
          padding: 2,
          mb: 4,
          maxWidth: "500px",
          margin: "auto",
          backgroundColor: "rgba(237, 27, 36, 0.05)",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Denetim Kurulu
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {["Denetim Kurulu Üyesi", "Denetim Kurulu Üyesi", "Denetim Kurulu Üyesi"].map((role, index) => (
            <Grid item xs={3} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  backgroundColor: "rgba(237, 27, 36, 0.1)",
                  border: "1px solid rgba(237, 27, 36, 0.5)",
                  borderRadius: 2,
                  maxWidth: 120,
                  margin: "auto",
                  boxShadow: 2,
                  "&:hover": {
                    backgroundColor: "rgba(237, 27, 36, 0.2)",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="body2" fontWeight="bold">
                    {role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Başkan ve Yönetim Kurulu */}
      <Box
        sx={{
          border: "2px solid rgba(237, 27, 36, 0.7)",
          borderRadius: 3,
          padding: 3,
          maxWidth: "700px",
          margin: "auto",
          backgroundColor: "rgba(237, 27, 36, 0.05)",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Başkan ve Yönetim Kurulu
        </Typography>

        {/* Başkan */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mb: 3,
          }}
        >
          <Card
            sx={{
              textAlign: "center",
              backgroundColor: "rgba(237, 27, 36, 0.1)",
              border: "1px solid rgba(237, 27, 36, 0.5)",
              borderRadius: 2,
              py: 2,
              px: 3,
              width: "160px",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "rgba(237, 27, 36, 0.2)",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              Başkan
            </Typography>
          </Card>
        </Box>

        {/* Yönetim Kurulu Üyeleri */}
        <Grid container spacing={3} justifyContent="center">
          {["Organizasyon Komitesi", "Medya Takımı", "Tasarım Takımı", "Eğitim Komitesi"].map((role, index) => (
            <Grid
              item
              xs={6}
              sm={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ position: "relative" }}>
                {/* Yönetim Kurulu Kartı */}
                <Card
                  sx={{
                    textAlign: "center",
                    backgroundColor: "rgba(237, 27, 36, 0.1)",
                    border: "1px solid rgba(237, 27, 36, 0.5)",
                    borderRadius: 2,
                    py: 2,
                    px: 3,
                    width: "140px",
                    boxShadow: 2,
                    "&:hover": {
                      backgroundColor: "rgba(237, 27, 36, 0.2)",
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Typography variant="body1">{role}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "0.9rem" }}
                  >
                    Yönetim Kurulu Üyesi
                  </Typography>
                </Card>

                {/* Ok */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "2px",
                    height: "15px",
                    backgroundColor: "rgba(237, 27, 36, 0.7)",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Organization;
