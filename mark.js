const networkUtilization = {
    "NET-A": {
      capacity: 100, // in MB (example capacity)
      totalUsage: 75.5, // Mock data: 75.5 MB in use
      flows: [
        {
          header: "172.31.255.2:34009/172.31.255.1:4444/UDP",
          srcNode: 1002,
          dstNode: 1001,
          trafficType: "UDP",
          volume: 75.5, // Mock data: 75.5 MB for this flow
          direction: "client to server"
        }
      ],
      utilizationPercentage: 75.5 // Mock data: 75.5% utilization
    }
  };


let temp = networkUtilization['NET-A'].flows
temp.forEach((obj) => {
    if(obj.srcNode === 1002 && obj.dstNode === 1001){
        console.log(obj.volume)
    } 
})

