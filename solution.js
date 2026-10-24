
// ============================================================
// CourseMaster - All Fix Code (BACKEND)
// ============================================================

// BUG-001 | src/services/enrollment.service.js
if (enrollment) {
  throw new Error("Already enrolled in this course");
}

// BUG-002 | src/services/auth.service.js
const match = await bcrypt.compare(password, user.passwordHash);
if (!match) throw new Error("Invalid email or password");

// BUG-003 | src/middlewares/authMiddleware.js
} catch {
  return res.status(401).json({ message: "Invalid or expired token" });
}

// BUG-004 | src/services/enrollment.service.js
await enrollment.save();
return enrollment;

// BUG-005 | enrollment.service.js + enrollment.controller.js
const completeLesson = async (enrollId, lessonId, studentId) => {
  const enrollment = await Enrollment.findOne({
    _id: enrollId,
    student: studentId,
  });
  if (!enrollment) throw new Error("Enrollment not found");
};

const data = await enrollmentService.completeLesson(
  req.params.enrollId,
  req.body.lessonId,
  req.user.id
);

// BUG-006 | src/services/enrollment.service.js
const course = await Course.findById(enrollment.course);
if (!course) throw new Error("Course not found");

const validLessonIds = course.syllabus.flatMap((mod) =>
  mod.lessons.map((lesson) => String(lesson._id))
);

if (!lessonId || !validLessonIds.includes(String(lessonId))) {
  throw new Error("Lesson does not belong to this course");
}

const alreadyDone = enrollment.progress.completedLessons
  .map(String)
  .includes(String(lessonId));

if (!alreadyDone) {
  enrollment.progress.completedLessons.push(lessonId);
}

const totalLessons = validLessonIds.length;
const completed = enrollment.progress.completedLessons.length;

enrollment.progress.percent =
  totalLessons === 0
    ? 0
    : Math.min(100, Math.round((completed / totalLessons) * 100));

// BUG-007 | src/services/auth.service.js
const register = async ({ name, email, password, adminKey }) => {
  let role = "student";

  if (adminKey) {
    const serverKey = process.env.ADMIN_REGISTRATION_KEY;

    if (!serverKey || adminKey !== serverKey) {
      throw new Error("Invalid admin registration key");
    }

    role = "admin";
  }

  const user = await User.create({ name, email, passwordHash, role });
};

// BUG-008 | src/services/quiz.service.js
const percent = Math.round((score / total) * 100);

// BUG-009 | src/services/course.service.js
Course.find(filter)
  .select("-syllabus.lessons.quiz.correctIndex")
  .sort(sortObj)
  .skip(skip)
  .limit(limitNum)
  .lean();

// BUG-011 | src/services/auth.service.js (login)
if (user.isBanned) throw new Error("Your account has been banned");

// BUG-012 | src/services/admin.service.js
const course = await Course.findByIdAndUpdate(id, payload, {
  new: true,
  runValidators: true,
});

// BUG-013 | admin.service.js + admin.controller.js
if (query.courseId) filter.course = query.courseId;

const data = await adminService.getAssignments(req.query);

// BUG-014 | src/services/admin.service.js
const update = {};

if (typeof status !== "undefined") {
  if (!["submitted", "reviewed"].includes(status)) {
    throw new Error("Invalid status. Use 'submitted' or 'reviewed'");
  }

  update.status = status;
}

if (typeof reviewNotes !== "undefined") {
  update.reviewNotes = reviewNotes;
}

if (typeof grade !== "undefined") {
  const g = Number(grade);

  if (Number.isNaN(g) || g < 0 || g > 100) {
    throw new Error("Grade must be a number between 0 and 100");
  }

  update.grade = g;
}

if (adminId) update.reviewer = adminId;

// BUG-015 | src/middlewares/validate.js
return res.status(400).json({
  message: "Validation error",
  errors: (err.issues || []).map((i) => ({
    field: i.path.join("."),
    message: i.message,
  })),
});

// BUG-016 | course.service.js + course.controller.js
if (!/^[0-9a-fA-F]{24}$/.test(String(id))) {
  throw new Error("Invalid course id");
}

const status = err.message === "Invalid course id" ? 400 : 404;
res.status(status).json({ message: err.message });

// BUG-027 | src/services/course.service.js
const escapeRegex = (str) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

filter.$or = [
  {
    title: {
      $regex: escapeRegex(search.trim()),
      $options: "i",
    },
  },
  {
    instructorName: {
      $regex: escapeRegex(search.trim()),
      $options: "i",
    },
  },
];

// BUG-029 | .env.example
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/coursemaster
JWT_SECRET=your-super-secret-jwt-key-change-this
ADMIN_REGISTRATION_KEY=your-secret-admin-key-here
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:5173

// BUG-033 | README.md
Base URL: http://localhost:5000/api

// BUG-034 | app.js
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// BUG-036 | src/services/course.service.js
let sortObj = { createdAt: -1, _id: -1 };

if (sort === "price_asc") sortObj = { price: 1, _id: 1 };
if (sort === "price_desc") sortObj = { price: -1, _id: 1 };

// BUG-039 / BUG-040 | package.json
"main": "server.js"

// BUG-041 | hash.js
git rm hash.js

// BUG-046 | app.js + course.controller.js
app.get("/", (req, res) => {
  res.send("Course Master Backend Running");
});

app.use(async (req, res, next) => {
  await connectDB();
});


// ============================================================
// CourseMaster - All Fix Code (FRONTEND)
// ============================================================

// Fix-1 | src/utils/auth.js
const TOKEN_KEY = "token";

export const saveToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("user_token");
  localStorage.removeItem("dev_bypass");
};

// Fix-1 | src/services/api.js
const AUTH_PATHS = ["/auth/login", "/auth/register"];

config.headers.Authorization = `Bearer ${token}`;

const status = error.response?.status;
const url = error.config?.url || "";
const isAuthRequest = AUTH_PATHS.some((p) => url.includes(p));

if (status === 401 && !isAuthRequest) {
  clearToken();

  const onAuthPage = ["/login", "/register"].includes(
    window.location.pathname
  );

  if (!onAuthPage) window.location.href = "/login";
}

// Fix-2 | src/layouts/MainLayout.jsx
const { token, user } = useSelector((state) => state.auth);

useEffect(() => {
  if (token && !user) dispatch(getMeAsync());
}, [token, user, dispatch]);

useEffect(() => {
  if (token) dispatch(fetchMyEnrollments());
}, [token, dispatch]);

// Fix-2 | src/store/slices/authSlice.js
export const getMeAsync = createAsyncThunk(
  "auth/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getMe();
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to load user"
      );
    }
  }
);

.addCase(getMeAsync.rejected, (state, action) => {
  state.loading = false;
  state.user = null;
  state.error = action.payload;
});

// Fix-3 | src/pages/Login/Login.jsx
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginAsync, clearError } from "../../store/slices/authSlice";

const { error } = useSelector((state) => state.auth);

useEffect(() => {
  dispatch(clearError());
}, [dispatch]);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  const result = await dispatch(loginAsync(form));

  setLoading(false);

  if (loginAsync.fulfilled.match(result)) {
    const role = result.payload.user?.role;
    const from = location.state?.from?.pathname;

    navigate(from || (role === "admin" ? "/admin" : "/student"), {
      replace: true,
    });
  }
};

placeholder="Enter your password"

// Fix-3 | src/pages/Register/Register.jsx
<input name="password" type="password" minLength={6} />

// Fix-4 | src/routes/ProtectedRoute.jsx
export default function ProtectedRoute({ children, role }) {
  const location = useLocation();
  const token = getToken();
  const [me, setMe] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    getMe()
      .then((res) => {
        if (!cancelled) setMe(res.data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  if (!token || failed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!me) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (role && me.role !== role) {
    return (
      <Navigate
        to={me.role === "admin" ? "/admin" : "/student"}
        replace
      />
    );
  }

  return children;
}

// Fix-4 | src/App.jsx
/admin route: <ProtectedRoute role="admin">
/student route: <ProtectedRoute>
/courses/:id/player route: <ProtectedRoute>

// Fix-4 | src/pages/admin/components/AdminDashboard.jsx
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="w-full max-w-none flex flex-col lg:flex-row min-h-[80vh]">
      <AdminSidebar />
      <div className="h-12 lg:hidden" />
      <main className="flex-1 p-2 sm:p-4 lg:p-5 bg-base-100 w-full">
        <Outlet />
      </main>
    </div>
  );
}

// Fix-5 | src/components/shared/Navbar.jsx
const { token, user: me } = useSelector((state) => state.auth);
const dashboardPath = me?.role === "admin" ? "/admin" : "/student";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-primary font-semibold"
    : "text-base-content/80 hover:text-primary";

const closeDropdown = () => document.activeElement?.blur();

const handleLogout = () => {
  closeDropdown();
  dispatch(logout());
  navigate("/", { replace: true });
};

<NavLink end className={navLinkClass} to="/">Home</NavLink>

// Fix-5 | src/components/shared/Footer.jsx
<Link to="/">Home</Link>
<Link to="/courses">Courses</Link>

// Fix-6 | src/store/slices/enrollmentSlice.js
import { logout } from "./authSlice";

state.enrollments = Array.isArray(action.payload)
  ? action.payload
  : action.payload?.data || [];

if (idx !== -1) {
  state.enrollments[idx] = updated;
}

.addCase(logout, (state) => {
  state.enrollments = [];
  state.error = null;
  state.success = null;
});

// Fix-6 | src/store/slices/adminSlice.js
import { logout } from "./authSlice";

updating: false,

.addCase(updateCourseAsync.pending, (state) => {
  state.updating = true;
  state.error = null;
})
.addCase(updateCourseAsync.fulfilled, (state) => {
  state.updating = false;
  state.success = "Course updated successfully!";
})
.addCase(updateCourseAsync.rejected, (state, action) => {
  state.updating = false;
  state.error = action.payload;
})
.addCase(logout, (state) => {
  state.enrollments = [];
  state.assignments = [];
  state.error = null;
  state.success = null;
});

// Fix-7 | src/pages/CousrseDetails/CourseDetails.jsx
const cannotEnroll = isAdmin;

const alreadyEnrolled = !!myEnrollments?.find(
  (e) => (e.course?._id || e.course) === id
);

useEffect(() => {
  dispatch(clearSuccess());
  dispatch(clearError());
}, [id, dispatch]);

৳ {course.price?.toLocaleString()}

{enrollError && !success && (
  <div className="alert alert-error mb-2">
    <span>{enrollError}</span>
  </div>
)}

<button
  onClick={() => navigate(`/courses/${id}/player`)}
  className="btn btn-primary gap-2"
>
  Continue Learning
</button>

<button
  onClick={() => navigate("/student")}
  className="btn btn-outline gap-2"
>
  Dashboard
</button>

{selectedBatchId !== null && (
  <div className="mt-3 text-sm text-primary">
    ✓ Batch selected for enrollment
  </div>
)}

// Fix-8 | src/components/CourseCard/CoursesSection.jsx
function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

useEffect(() => {
  let cancelled = false;

  return () => {
    cancelled = true;
  };
}, [page, sort, debouncedSearch, debouncedCategory, debouncedTags]);

const withPageReset = (setter) => (value) => {
  setter(value);
  setPage(1);
};

const onSearchSubmit = (e) => {
  e.preventDefault();
};

// Fix-8 | src/components/CourseCard/CourseCard.jsx
<h2 className="card-title text-lg sm:text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">

<div className="text-sm text-base-content/70 mt-2 flex items-center gap-2">
  ...
</div>

// Fix-9 | src/pages/admin/components/CourseForm.jsx (NOTUN FILE)
const buildInitial = (course) => ({
  syllabus: JSON.parse(JSON.stringify(course?.syllabus || [])),
});

// Fix-9 | CreateCourse.jsx
const handleSubmit = async (payload) => {
  const result = await dispatch(createCourseAsync(payload));

  if (!result.error) {
    setTimeout(() => navigate("/admin/courses"), 1500);
  }
};

<CourseForm
  initialValues={null}
  onSubmit={handleSubmit}
  submitting={creating}
  submitLabel="Create Course"
  submittingLabel="Creating..."
  error={error}
  onCancel={() => navigate("/admin/courses")}
/>

// Fix-9 | EditCourse.jsx
const { updating, error } = useSelector((state) => state.admin);

const handleSubmit = async (payload) => {
  const res = await dispatch(updateCourseAsync({ id, data: payload }));

  if (!res.error) navigate("/admin/courses");
};

<CourseForm
  key={currentCourse._id}
  initialValues={currentCourse}
  onSubmit={handleSubmit}
  submitting={updating}
  submitLabel="Update Course"
  submittingLabel="Updating..."
  error={error}
  onCancel={() => navigate("/admin/courses")}
/>

// Fix-9 | chhoto fix
AdminOverview.jsx: trend: null,

Analytics.jsx: <span>Total Admins:</span>

Assignments.jsx: {(assign.answer || "").substring(0, 30)}...

ManageUsers.jsx: <td>{userItem.email}</td>

StudentDashboard.jsx: const validEnrollments = enrollments.filter((e) => e.course);

StudentDashboard.jsx: {Math.round(enrollment.progress?.percent || 0)}%
