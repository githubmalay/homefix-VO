interface Booking {
  id: string;
  customerName: string;
  service: string;
  handyman: string;
  date: string;
  time: string;
  status: "Pending" | "Confirmed" | "In Progress" | "Completed" | "Cancelled";
  amount: number;
}

interface User {
  id: string;
  name: string;
  role: "customer" | "handyman" | "admin";
}

export const getBookings = (): Booking[] => {
  if (typeof window !== 'undefined') {
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
  }
  return [];
};

export const saveBooking = (booking: Omit<Booking, 'id' | 'status'>) => {
  if (typeof window !== 'undefined') {
    const bookings = getBookings();
    const newBooking = {
      ...booking,
      id: `JOB-${Date.now()}`,
      status: "Confirmed" as "Confirmed",
      amount: Math.floor(Math.random() * 10000) + 500, // Random amount for demo
    };
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    return newBooking;
  }
};

export const getHandymen = () => {
  if (typeof window !== 'undefined') {
    const handymen = localStorage.getItem('handymen');
    return handymen ? JSON.parse(handymen) : [];
  }
  return [];
};

export const getCustomers = () => {
  if (typeof window !== 'undefined') {
    const customers = localStorage.getItem('customers');
    return customers ? JSON.parse(customers) : [];
  }
  return [];
};

export const saveMockData = () => {
  if (typeof window !== 'undefined' && !localStorage.getItem('bookings')) {
    const mockBookings: Booking[] = [
      {
        id: "JOB-1",
        customerName: "Jane Doe",
        service: "Plumbing",
        handyman: "John Smith",
        date: "2024-09-01",
        time: "10:00 AM",
        status: "Completed",
        amount: 85,
      },
      {
        id: "JOB-2",
        customerName: "Jane Doe",
        service: "Electrical",
        handyman: "Sarah Wilson",
        date: "2024-09-05",
        time: "02:00 PM",
        status: "In Progress",
        amount: 120,
      },
    ];
    localStorage.setItem('bookings', JSON.stringify(mockBookings));
  }
  if (typeof window !== 'undefined' && !localStorage.getItem('handymen')) {
    const mockHandymen = [
      {
        id: 1,
        name: "Suresh Yadav",
        email: "suresh.yadav@email.com",
        phone: "+91 98765 43210",
        skills: ["Plumbing", "Electrical"],
        rating: 4.8,
        completedJobs: 156,
        earnings: "₹2,34,500",
        status: "verified",
        location: "Mumbai, Maharashtra",
        joinDate: "2023-08-15",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        name: "Ramesh Singh",
        email: "ramesh.singh@email.com",
        phone: "+91 87654 32109",
        skills: ["Carpentry", "Painting"],
        rating: 4.6,
        completedJobs: 89,
        earnings: "₹1,67,800",
        status: "verified",
        location: "Delhi, NCR",
        joinDate: "2023-10-20",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 3,
        name: "Vikash Kumar",
        email: "vikash.kumar@email.com",
        phone: "+91 76543 21098",
        skills: ["AC Repair", "Appliance"],
        rating: 4.2,
        completedJobs: 45,
        earnings: "₹89,200",
        status: "pending",
        location: "Bangalore, Karnataka",
        joinDate: "2024-01-10",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ];
    localStorage.setItem('handymen', JSON.stringify(mockHandymen));
  }
  if (typeof window !== 'undefined' && !localStorage.getItem('customers')) {
    const mockCustomers = [
      {
        id: 1,
        name: "Rajesh Kumar",
        email: "rajesh.kumar@email.com",
        phone: "+91 98765 43210",
        joinDate: "2024-01-15",
        totalJobs: 12,
        totalSpent: "₹45,600",
        status: "active",
        lastActive: "2 hours ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        name: "Priya Sharma",
        email: "priya.sharma@email.com",
        phone: "+91 87654 32109",
        joinDate: "2024-02-20",
        totalJobs: 8,
        totalSpent: "₹28,400",
        status: "active",
        lastActive: "1 day ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 3,
        name: "Amit Patel",
        email: "amit.patel@email.com",
        phone: "+91 76543 21098",
        joinDate: "2023-12-10",
        totalJobs: 25,
        totalSpent: "₹89,200",
        status: "inactive",
        lastActive: "1 week ago",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ];
    localStorage.setItem('customers', JSON.stringify(mockCustomers));
  }
};