import {useTheme} from "@mui/material/styles";

export default function LineChartBaseOption() {
  const theme = useTheme();

  return {
    // Colors
    colors: [
      theme.palette.primary.main,
    ],

    // Chart
    chart: {
      toolbar: {show: false},
      zoom: {enabled: false},
      // animations: { enabled: false},
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily
    },

    // Tooltip
    tooltip: {
      x: {
        show: false
      }
    },

    // Fill
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100]
      }
    },

    // Stroke
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },

    // Legend
    legend: {
      show: true,
      fontSize: 13,
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        radius: 12
      },
      fontWeight: 500,
      itemMargin: {horizontal: 12},
      labels: {
        colors: theme.palette.text.primary
      }
    },

    // Responsive
    responsive: [
      {
        // sm
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {bar: {columnWidth: '40%'}}
        }
      },
      {
        // md
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {bar: {columnWidth: '32%'}}
        }
      }
    ]
  };
}