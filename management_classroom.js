/**
 * Management of Google Classroom
 * Created on 20250818 09:57
 */

// REST Resource: courses: https://developers.google.com/workspace/classroom/reference/rest/v1/courses
function classroom_courses_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  const { queryParameters = {} } = object;
  const { studentId, teacherId, courseStates } = queryParameters;
  const options = { studentId, teacherId, courseStates };
  Object.entries(options).forEach(([k, v]) => v || delete options[k]);
  return for_google_apis.list({ func: Classroom.Courses.list, args: [options], jsonSchema: jsonSchemaForClassroom.Course, itemName: "courses" });
}

function classroom_courses_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.create, args: [object.requestBody], jsonSchema: jsonSchemaForClassroom.Course });
}

function classroom_courses_update(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.update, args: [object.requestBody, object.pathParameters?.id] });
}

function classroom_courses_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.patch, args: [object.requestBody, object.pathParameters?.id, object.queryParameters] });
}

function classroom_courses_remove(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.remove, args: [object.pathParameters?.id] });
}

function classroom_courses_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.get, args: [object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.Course });
}

function classroom_courses_getGradingPeriodSettings(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.getGradingPeriodSettings, args: [object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.GradingPeriodSettings });
}

function classroom_courses_updateGradingPeriodSettings(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.updateGradingPeriodSettings, args: [object.pathParameters?.courseId, object.queryParameters?.updateMask] });
}


// REST Resource: courses.aliases: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases
function classroom_courses_aliases_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.Aliases.list, args: [object.pathParameters?.courseId, {}], jsonSchema: jsonSchemaForClassroom.CourseAlias, itemName: "aliases" });
}

function classroom_courses_aliases_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.Aliases.create, args: [object.requestBody, object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.CourseAlias });
}

function classroom_courses_aliases_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.Aliases.remove, args: [object.pathParameters?.courseId, object.pathParameters?.alias] });
}


// REST Resource: courses.courseWork: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork
function classroom_courses_courseWork_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.CourseWork.list, args: [object.pathParameters?.courseId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.CourseWork, itemName: "courseWork" });
}

function classroom_courses_courseWork_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.CourseWork.create, args: [object.requestBody, object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.CourseWork });
}

function classroom_courses_courseWork_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.patch, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.id, object.queryParameters || {}] });
}

function classroom_courses_courseWork_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.CourseWork.remove, args: [object.pathParameters?.courseId, object.pathParameters?.id] });
}

function classroom_courses_courseWork_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.CourseWork.get, args: [object.pathParameters?.courseId, object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.CourseWork });
}

function classroom_courses_courseWork_modifyAssignees(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.modifyAssignees, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.id] });
}


// REST Resource: courses.students: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students
function classroom_courses_students_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.Students.list, args: [object.pathParameters?.courseId, {}], jsonSchema: jsonSchemaForClassroom.Student, itemName: "students" });
}

function classroom_courses_students_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.Students.create, args: [object.requestBody, object.pathParameters?.courseId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.Student });
}

function classroom_courses_students_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.Students.remove, args: [object.pathParameters?.courseId, object.pathParameters?.userId] });
}

function classroom_courses_students_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.Students.get, args: [object.pathParameters?.courseId, object.pathParameters?.userId], jsonSchema: jsonSchemaForClassroom.Student });
}


// REST Resource: courses.teachers: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers
function classroom_courses_teachers_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.Teachers.list, args: [object.pathParameters?.courseId, {}], jsonSchema: jsonSchemaForClassroom.Teacher, itemName: "teachers" });
}

function classroom_courses_teachers_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.Teachers.create, args: [object.requestBody, object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.Teacher });
}

function classroom_courses_teachers_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.Teachers.remove, args: [object.pathParameters?.courseId, object.pathParameters?.userId] });
}

function classroom_courses_teachers_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.Teachers.get, args: [object.pathParameters?.courseId, object.pathParameters?.userId], jsonSchema: jsonSchemaForClassroom.Teacher });
}


// REST Resource: courses.courseWorkMaterials: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials
function classroom_courses_courseWorkMaterials_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.CourseWorkMaterials.list, args: [object.pathParameters?.courseId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.CourseWorkMaterial, itemName: "courseWorkMaterial" });
}

function classroom_courses_courseWorkMaterials_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.CourseWorkMaterials.create, args: [object.requestBody, object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.CourseWorkMaterial });
}

function classroom_courses_courseWorkMaterials_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWorkMaterials.patch, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.id, object.queryParameters || {}] });
}

function classroom_courses_courseWorkMaterials_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.CourseWorkMaterials.remove, args: [object.pathParameters?.courseId, object.pathParameters?.id] });
}

function classroom_courses_courseWorkMaterials_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.CourseWorkMaterials.get, args: [object.pathParameters?.courseId, object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.CourseWorkMaterial });
}


// REST Resource: courses.courseWork.studentSubmissions: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions
function classroom_courses_courseWork_studentSubmissions_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.CourseWork.StudentSubmissions.list, args: [object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.StudentSubmission, itemName: "studentSubmissions" });
}

function classroom_courses_courseWork_studentSubmissions_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.StudentSubmissions.patch, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id, object.queryParameters || {}] });
}

function classroom_courses_courseWork_studentSubmissions_reclaim(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.StudentSubmissions.reclaim, args: [{}, object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id] });
}

function classroom_courses_courseWork_studentSubmissions_return(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.StudentSubmissions.return, args: [{}, object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id] });
}

function classroom_courses_courseWork_studentSubmissions_turnIn(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.StudentSubmissions.turnIn, args: [{}, object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id] });
}

function classroom_courses_courseWork_studentSubmissions_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.CourseWork.StudentSubmissions.get, args: [object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.StudentSubmission });
}


// REST Resource: courses.announcements: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements
function classroom_courses_announcements_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.Announcements.list, args: [object.pathParameters?.courseId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.Announcement, itemName: "announcements" });
}

function classroom_courses_announcements_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.Announcements.create, args: [object.requestBody, object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.Announcement });
}

function classroom_courses_announcements_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.Announcements.patch, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.id, object.queryParameters || {}] });
}

function classroom_courses_announcements_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.Announcements.remove, args: [object.pathParameters?.courseId, object.pathParameters?.id] });
}

function classroom_courses_announcements_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.Announcements.get, args: [object.pathParameters?.courseId, object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.CourseWorkMaterial });
}

function classroom_courses_announcements_modifyAssignees(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.Announcements.modifyAssignees, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.id] });
}


// REST Resource: courses.courseWork.rubrics: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics
function classroom_courses_courseWork_rubrics_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.CourseWork.Rubrics.list, args: [object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.Rubric, itemName: "rubrics" });
}

function classroom_courses_courseWork_rubrics_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.CourseWork.Rubrics.create, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.courseWorkId], jsonSchema: jsonSchemaForClassroom.Rubric });
}

function classroom_courses_courseWork_rubrics_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.CourseWork.Rubrics.patch, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id, object.queryParameters || {}] });
}

function classroom_courses_courseWork_rubrics_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.CourseWork.Rubrics.remove, args: [object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id] });
}

function classroom_courses_courseWork_rubrics_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.CourseWork.Rubrics.get, args: [object.pathParameters?.courseId, object.pathParameters?.courseWorkId, object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.Rubric });
}


// REST Resource: courses.topics: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics
function classroom_courses_topics_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.Courses.Topics.list, args: [object.pathParameters.courseId, {}], jsonSchema: jsonSchemaForClassroom.Topic, itemName: "topic" });
}

function classroom_courses_topics_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Courses.Topics.create, args: [object.requestBody, object.pathParameters?.courseId], jsonSchema: jsonSchemaForClassroom.Topic });
}

function classroom_courses_topics_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Courses.Topics.patch, args: [object.requestBody, object.pathParameters?.courseId, object.pathParameters?.id, object.queryParameters || {}] });
}

function classroom_courses_topics_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Courses.Topics.remove, args: [object.pathParameters?.courseId, object.pathParameters?.id] });
}

function classroom_courses_topics_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Courses.Topics.get, args: [object.pathParameters?.courseId, object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.Topic });
}


// REST Resource: invitations: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations
function classroom_invitations_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  const { queryParameters } = object;
  const { userId, courseId } = queryParameters;
  const options = { userId, courseId };
  Object.entries(options).forEach(([k, v]) => v || delete options[k]);
  return for_google_apis.list({ func: Classroom.Invitations.list, args: [options], jsonSchema: jsonSchemaForClassroom.Invitation, itemName: "invitations" });
}

function classroom_invitations_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Invitations.create, args: [object.requestBody], jsonSchema: jsonSchemaForClassroom.Invitation });
}

function classroom_invitations_remove(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Invitations.remove, args: [object.pathParameters?.id] });
}

function classroom_invitations_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.Invitations.get, args: [object.pathParameters?.id], jsonSchema: jsonSchemaForClassroom.Invitation });
}

function classroom_invitations_accept(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.Invitations.accept, args: [object.pathParameters?.id] });
}


// REST Resource: registrations: https://developers.google.com/workspace/classroom/reference/rest/v1/registrations
function classroom_registrations_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.Registrations.create, args: [object.requestBody], jsonSchema: jsonSchemaForClassroom.Registration });
}

function classroom_registrations_delete(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.Registrations.remove, args: [object.pathParameters?.registrationId] });
}


// REST Resource: userProfiles: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles
function classroom_userProfiles_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.UserProfiles.get, args: [object.pathParameters?.userId], jsonSchema: jsonSchemaForClassroom.UserProfile });
}


// REST Resource: userProfiles.guardianInvitations: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations
function classroom_userProfiles_guardianInvitations_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.UserProfiles.GuardianInvitations.list, args: [object.pathParameters?.studentId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.GuardianInvitation, itemName: "guardianInvitations" });
}

function classroom_userProfiles_guardianInvitations_create(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.create({ func: Classroom.UserProfiles.GuardianInvitations.create, args: [object.requestBody, object.pathParameters?.studentId], jsonSchema: jsonSchemaForClassroom.GuardianInvitation });
}

function classroom_userProfiles_guardianInvitations_patch(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.update({ func: Classroom.UserProfiles.GuardianInvitations.patch, args: [object.requestBody, object.pathParameters?.studentId, object.pathParameters?.invitationId, object.queryParameters || {}] });
}

function classroom_userProfiles_guardianInvitations_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.UserProfiles.GuardianInvitations.get, args: [object.pathParameters?.studentId, object.pathParameters?.invitationId], jsonSchema: jsonSchemaForClassroom.GuardianInvitation });
}


// REST Resource: userProfiles.guardians: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians
function classroom_userProfiles_guardians_list(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.list({ func: Classroom.UserProfiles.Guardians.list, args: [object.pathParameters?.studentId, object.queryParameters || {}], jsonSchema: jsonSchemaForClassroom.Guardian, itemName: "guardians" });
}

function classroom_userProfiles_guardians_remove(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.remove({ func: Classroom.UserProfiles.Guardians.remove, args: [object.pathParameters?.studentId, object.pathParameters?.guardianId] });
}

function classroom_userProfiles_guardians_get(object = {}) {
  /**
   * Check API
   */
  const check = checkAPI_("Classroom");
  if (check.result) {
    return check;
  }

  return for_google_apis.get({ func: Classroom.UserProfiles.Guardians.get, args: [object.pathParameters?.studentId, object.pathParameters?.guardianId], jsonSchema: jsonSchemaForClassroom.Guardian });
}


// REST Resource: courses.studentGroups: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups
// This has not been released on August 7, 2025, yet.


// REST Resource: courses.studentGroups.studentGroupMembers: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups.studentGroupMembers
// This has not been released on August 7, 2025, yet.


// Descriptions of the functions.
const descriptions_management_classroom = {
  classroom_courses_list: {
    title: "Get courses list",
    description: [
      `Use to retrieve courses of Google Classroom using a method "courses.list" of Google Classroom API.`,
      `Unless otherwise specified, run this tool without parameters of "studentId", "teacherId", and "courseStates".`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          type: "object",
          properties: {
            studentId: {
              type: "string",
              description: [
                `Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`
              ].join("\n")
            },
            teacherId: {
              type: "string",
              description: [
                `Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
            courseStates: {
              type: "array",
              description: "Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.",
              items: {
                type: "string", description: "Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED."
              }
            }
          }
        }
      },
      required: ["queryParameters"]
    }
  },

  classroom_courses_create: {
    title: "Creates a course",
    description: [
      `Use to create a course using the "courses.create" method of Google Classroom API.`,
      `The user specified in ownerId is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Course,
      },
      required: ["requestBody"]
    }
  },

  classroom_courses_update: {
    title: "Updates a course",
    description: `Use to update a course using the "courses.update" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Course,
        pathParameters: {
          type: "object",
          properties: {
            id: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          required: ["id"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_patch: {
    title: "Updates one or more fields in a course",
    description: `Use to update one or more fields in a course using the "courses.patch" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Course,
        pathParameters: {
          type: "object",
          properties: {
            id: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
          },
          required: ["id"]
        },
        queryParameters: {
          type: "object",
          properties: {
            updateMask: {
              type: "string", description: [
                `Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid:`,
                ``,
                `name`,
                `section`,
                `descriptionHeading`,
                `description`,
                `room`,
                `courseState`,
                `ownerId`,
                ``,
                `Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete.`,
                `When set in a query parameter, this field should be specified as`,
                `updateMask=<field1>,<field2>,...`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            }
          },
          required: ["updateMask"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_remove: {
    title: "Deletes a course",
    description: `Use to deletes a course using the "courses.delete" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            id: { type: "string", description: "Course ID. Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias." }

          },
          required: ["id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_get: {
    title: "Returns metadata of a course",
    description: `Use to return metadata of a course.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            id: { type: "string", description: "Course ID. Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias." }

          },
          required: ["id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_getGradingPeriodSettings: {
    title: "Returns the grading period settings in a course.",
    description: `Use to return the grading period settings in a course.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias." }
          },
          required: ["courseId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_updateGradingPeriodSettings: {
    title: "Updates grading period settings of a course",
    description: `Use to update grading period settings of a course using the "courses.updateGradingPeriodSettings" method of Google Classroom API.`,
    parameters: {
      "type": "object",
      "properties": {
        "requestBody": {
          "title": "GradingPeriodSettings",
          "description": "Settings for grading periods in Google Classroom.",
          "type": "object",
          "properties": {
            "gradingPeriods": {
              "type": "array",
              "description": "The list of grading periods.",
              "items": {
                "type": "object",
                "title": "GradingPeriod",
                "description": "Represents a specific grading period.",
                "properties": {
                  "title": {
                    "type": "string",
                    "description": "Title of the grading period. For example, “Semester 1”."
                  },
                  "startDate": {
                    "description": "Start date, in UTC, of the grading period. Inclusive. This object contains three properties: `year` (integer, from 1 to 9999), `month` (integer, from 1 to 12), and `day` (integer, from 1 to 31). The `day` must be valid for the given year and month.",
                    "type": "string",

                    // "type": "object",
                    // "title": "Date",
                    // "properties": {"year": {"type": "number"}, "month": {"type": "number"}, "day": {"type": "number"}},
                    // "required": ["year", "month", "day"]
                  },
                  "endDate": {
                    "description": "End date, in UTC, of the grading period. Inclusive. This object contains three properties: `year` (integer, from 1 to 9999), `month` (integer, from 1 to 12), and `day` (integer, from 1 to 31). The `day` must be valid for the given year and month.",
                    "type": "string",

                    // "type": "object",
                    // "title": "Date",
                    // "properties": {"year": {"type": "number"}, "month": {"type": "number"}, "day": {"type": "number"}},
                    // "required": ["year", "month", "day"]
                  }
                },
                "required": ["startDate", "endDate"]
              }
            },
            "applyToExistingCoursework": {
              "type": "boolean",
              "description": "Supports toggling the application of grading periods on existing stream items. Once set, this value is persisted meaning that it does not need to be set in every request to update GradingPeriodSettings. If not previously set, the default is False."
            },
          },
          "required": ["gradingPeriods"]
        },
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          "required": ["courseId"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "updateMask": {
              "type": "string",
              "description": "Mask that identifies which fields in the GradingPeriodSettings to update.\n\nThe GradingPeriodSettings gradingPeriods list will be fully replaced by the grading periods specified in the update request. For example:\n- Grading periods included in the list without an ID are considered additions, and a new ID will be assigned when the request is made.\n- Grading periods that currently exist, but are missing from the request will be considered deletions.\n- Grading periods with an existing ID and modified data are considered edits. Unmodified data will be left as is.\n- Grading periods included with an unknown ID will result in an error.\n\nThe following fields may be specified:\n- gradingPeriods\n- applyToExistingCoursework\n\nThis is a comma-separated list of fully qualified names of fields. Example: \"user.displayName,photo\"."
            }
          },
          "required": ["updateMask"]
        }
      },
      "required": ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_aliases_list: {
    title: "Get a list of aliases.",
    description: "Use to get a list of aliases.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." }
          },
          required: ["courseId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_aliases_create: {
    title: "Creates an alias for a course.",
    description: "Use to create an alias for a course.",
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          properties: {
            alias: {
              type: "string", description: [
                `Alias string. The format of the string indicates the desired alias scoping.`,
                ``,
                `"d:<name>" indicates a domain-scoped alias. Example: "d:math_101"`,
                `"p:<name>" indicates a project-scoped alias. Example: "p:abc123"`,
                `This field has a maximum length of 256 characters.`,
              ].join("\n")
            }
          },
          required: ["alias"]
        },
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." }
          },
          required: ["courseId"]
        },
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_aliases_delete: {
    title: "Deletes an alias of a course.",
    description: "Use to delete an alias of a course.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            alias: { type: "string", description: "Alias to delete. This may not be the Classroom-assigned identifier." },
          },
          required: ["courseId", "alias"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_list: {
    title: "Returns a list of course work that the requester is permitted to view.",
    description: "Use to return a list of course work that the requester is permitted to view.",
    parameters: {
      "type": "object",
      "properties": {
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          "required": ["courseId"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "courseWorkStates": {
              "type": "array",
              "description": "Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of PUBLISHED is returned. [1]",
              "items": {
                "type": "string",
                "enum": ["COURSE_WORK_STATE_UNSPECIFIED", "PUBLISHED", "DRAFT", "DELETED"]
              }
            },
            "orderBy": {
              "type": "string",
              "description": "Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are updateTime and dueDate. Supported direction keywords are asc and desc. If not specified, updateTime desc is the default behavior. [1]"
            },
            "previewVersion": {
              "type": "string",
              "description": "Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program. [1]",
              "enum": ["V1_PREVIEW"]
            }
          }
        }
      },
      "required": ["pathParameters"]
    }
  },

  classroom_courses_courseWork_create: {
    title: "Creates course work",
    description: [
      `Use to create course work using the "courses.courseWork.create" method of Google Classroom API.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.CourseWork,
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
          },
          required: ["courseId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_courseWork_patch: {
    title: "Updates one or more fields of a course work",
    description: `Use to update one or more fields of a course work using the "courses.courseWork.patch" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.CourseWork,
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            id: {
              type: "string", description: "Course work ID. Identifier of the course work."
            },
          },
          required: ["courseId", "id"]
        },
        queryParameters: {
          type: "object",
          properties: {
            updateMask: {
              type: "string", description: [
                `Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the CourseWork object. If a field that does not support empty values is included in the update mask and not set in the CourseWork object, an INVALID_ARGUMENT error is returned.`,
                ``,
                `The following fields may be specified by teachers:`,
                ``,
                `title`,
                `description`,
                `state`,
                `dueDate`,
                `dueTime`,
                `maxPoints`,
                `scheduledTime`,
                `submissionModificationMode`,
                `topicId`,
                `gradingPeriodId`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            }
          },
          required: ["updateMask"]
        }
      },
      required: ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_courses_courseWork_delete: {
    title: "Deletes a course work",
    description: "Use to delete a course work.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: { type: "string", description: "Course work ID. Identifier of the course work to delete. This identifier is a Classroom-assigned identifier." },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_get: {
    title: "Returns course work",
    description: "Use to return metadata of course work.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: { type: "string", description: "Course work ID. Identifier of the course work to delete. This identifier is a Classroom-assigned identifier." },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_modifyAssignees: {
    title: "Modifies assignee mode",
    description: "Use to modify assignee mode and options of a coursework.",
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          properties: {
            assigneeMode: {
              type: "string",
              description: "Mode of the coursework describing whether it will be assigned to all students or specified individual students. ALL_STUDENTS: All students can see the item. This is the default state., INDIVIDUAL_STUDENTS: A subset of the students can see the item.",
              enum: ["ALL_STUDENTS", "INDIVIDUAL_STUDENTS"],
            },
            modifyIndividualStudents: {
              description: "Set which students are assigned or not assigned to the coursework. Must be specified only when assigneeMode is INDIVIDUAL_STUDENTS.",
              type: "object",
              properties: {
                addStudentIds: { type: "array", items: { type: "string", description: "IDs of students to be added as having access to this coursework/announcement." } },
                removeStudentIds: { type: "array", items: { type: "string", description: "IDs of students to be removed from having access to this coursework/announcement." } },
              }
            }
          },
          required: ["assigneeMode"]
        },
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: { type: "string", description: "Course work ID. Identifier of the course work to delete. This identifier is a Classroom-assigned identifier." },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_students_list: {
    title: "Returns a list of students",
    description: "Use to return a list of students of this course that the requester is permitted to view.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string",
              description: "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          required: ["courseId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_students_create: {
    title: "Adds a user as a student of a course",
    description: `Use to add a user as a student of a course. using the "courses.students.create" method of Google Classroom API.`,
    parameters: {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "CreateStudentRequest",
      "description": "Schema for a request to create a student in a course.",
      "type": "object",
      "properties": {
        "requestBody": {
          "description": "A student in a course.",
          "type": "object",
          "properties": {
            "userId": {
              "type": "string",
              "description": [
                `Identifier of the user.`,
                `When specified as a parameter of a request, this identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            }
          },
          "required": ["userId"]
        },
      },
      "pathParameters": {
        "type": "object",
        "properties": {
          "courseId": {
            "type": "string",
            "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
          }
        },
        "required": ["courseId"]
      },
      "queryParameters": {
        "type": "object",
        "properties": {
          "enrollmentCode": {
            "type": "string",
            "description": "Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user."
          }
        }
      }
    },
    "required": ["requestBody", "pathParameters"],
  },

  classroom_courses_students_delete: {
    title: "Deletes a student of a course",
    description: "Use to delete a student of a course.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            userId: {
              type: "string", description: [
                `Identifier of the student to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
          },
          required: ["courseId", "userId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_students_get: {
    title: "Returns a student of a course",
    description: "Use to return a student of a course.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            userId: {
              type: "string", description: [
                `Identifier of the student to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
          },
          required: ["courseId", "userId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_teachers_list: {
    title: "Returns a list of teachers",
    description: "Use to return a list of teachers of this course that the requester is permitted to view.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string",
              description: "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          required: ["courseId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_teachers_create: {
    title: "Adds a user as a teacher of a course",
    description: `Use to add a user as a teacher of a course using the "courses.teachers.create" method of Google Classroom API.`,
    parameters: {
      "description": "Defines the structure for an API request involving a teacher object.",
      "type": "object",
      "properties": {
        "requestBody": {
          "description": "Teacher of a course.",
          "type": "object",
          "properties": {
            "userId": {
              "type": "string",
              "description": [
                `Identifier of the user.`,
                `When specified as a parameter of a request, this identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
          },
          "required": ["userId"]
        },
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          "required": ["courseId"]
        }
      },
      "required": ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_teachers_delete: {
    title: "Deletes a teacher of a course",
    description: "Use to delete a teacher of a course.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            userId: {
              type: "string", description: [
                `Identifier of the teacher to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
          },
          required: ["courseId", "userId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_teachers_get: {
    title: "Returns a teacher of a course",
    description: "Use to return a teacher of a course.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            userId: {
              type: "string", description: [
                `Identifier of the teacher to delete. The identifier can be one of the following:`,
                `the numeric identifier for the user`,
                `the email address of the user`,
                `the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
          },
          required: ["courseId", "userId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWorkMaterials_list: {
    title: "Google Classroom API - Method: courses.courseWorkMaterials.list",
    description: "Returns a list of course work material that the requester is permitted to view.",
    parameters: {
      "type": "object",
      "properties": {
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          "required": ["courseId"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "courseWorkMaterialStates": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
                  "PUBLISHED",
                  "DRAFT",
                  "DELETED"
                ]
              },
              "description": "Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of PUBLISHED is returned."
            },
            "orderBy": {
              "type": "string",
              "description": "Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is updateTime. Supported direction keywords are asc and desc. If not specified, updateTime desc is the default behavior. Examples: updateTime asc, updateTime"
            },
            "materialLink": {
              "type": "string",
              "description": "Optional filtering for course work material with at least one link material whose URL partially matches the provided string."
            },
            "materialDriveId": {
              "type": "string",
              "description": "Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If materialLink is also specified, course work material must have materials matching both filters."
            }
          }
        }
      },
      "required": ["pathParameters"]
    }
  },

  classroom_courses_courseWorkMaterials_create: {
    title: "Creates a course work material",
    description: `Use to creates a course work material using the "courses.courseWorkMaterials.create" method of Google Classroom API.`,
    parameters: {
      "type": "object",
      "properties": {
        "requestBody": {
          "title": "CourseWorkMaterial",
          "description": "Course work material created by a teacher for students of the course",
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters."
            },
            "description": {
              "type": "string",
              "description": "Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters."
            },
            "materials": {
              "type": "array",
              "description": "Additional materials. A course work material must have no more than 20 material items. [1]",
              "items": {
                "type": "object",
                "description": "Material attached to course work. This can be a drive file, a YouTube video, a link, or a form.",
              }
            },
            "state": {
              "type": "string",
              "description": "Status of this course work material. If unspecified, the default state is DRAFT.",
              "enum": ["COURSEWORK_MATERIAL_STATE_UNSPECIFIED", "PUBLISHED", "DRAFT", "DELETED"]
            },
            "scheduledTime": {
              "type": "string",
              "format": "date-time",
              "description": "Optional timestamp when this course work material is scheduled to be published."
            },
            "assigneeMode": {
              "type": "string",
              "description": "Assignee mode of the course work material. If unspecified, the default value is ALL_STUDENTS.",
              "enum": ["ASSIGNEE_MODE_UNSPECIFIED", "ALL_STUDENTS", "INDIVIDUAL_STUDENTS"]
            },
            "individualStudentsOptions": {
              "type": "object",
              "description": "Assignee details about a coursework/announcement. This field is set if and only if assigneeMode is INDIVIDUAL_STUDENTS.",
              "properties": {
                "studentIds": {
                  "type": "array",
                  "items": { "type": "string" }
                }
              }
            },
            "topicId": {
              "type": "string",
              "description": "Identifier for the topic that this course work material is associated with. Must match an existing topic in the course."
            }
          },
          "required": ["title"]
        },
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            }
          },
          "required": ["courseId"]
        }
      },
      "required": ["requestBody", "pathParameters"],
    }
  },

  classroom_courses_courseWorkMaterials_patch: {
    title: "Updates one or more fields of a course work material",
    description: `Use to update one or more fields of a course work material using the "courses.courseWorkMaterials.patch" method of Google Classroom API.`,
    parameters: {
      "type": "object",
      "properties": {
        "requestBody": {
          "title": "CourseWorkMaterial",
          "description": "Course work material created by a teacher for students of the course",
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters."
            },
            "description": {
              "type": "string",
              "description": "Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters."
            },
            "materials": {
              "type": "array",
              "description": "Additional materials. A course work material must have no more than 20 material items. [1]",
              "items": {
                "type": "object",
                "description": "Material attached to course work. This can be a drive file, a YouTube video, a link, or a form.",
              }
            },
            "state": {
              "type": "string",
              "description": "Status of this course work material. If unspecified, the default state is DRAFT.",
              "enum": ["COURSEWORK_MATERIAL_STATE_UNSPECIFIED", "PUBLISHED", "DRAFT", "DELETED"]
            },
            "scheduledTime": {
              "type": "string",
              "format": "date-time",
              "description": "Optional timestamp when this course work material is scheduled to be published."
            },
            "assigneeMode": {
              "type": "string",
              "description": "Assignee mode of the course work material. If unspecified, the default value is ALL_STUDENTS.",
              "enum": ["ASSIGNEE_MODE_UNSPECIFIED", "ALL_STUDENTS", "INDIVIDUAL_STUDENTS"]
            },
            "individualStudentsOptions": {
              "type": "object",
              "description": "Assignee details about a coursework/announcement. This field is set if and only if assigneeMode is INDIVIDUAL_STUDENTS.",
              "properties": {
                "studentIds": {
                  "type": "array",
                  "items": { "type": "string" }
                }
              }
            },
            "topicId": {
              "type": "string",
              "description": "Identifier for the topic that this course work material is associated with. Must match an existing topic in the course."
            }
          },
          "required": ["title"]
        },
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            "id": {
              "type": "string",
              "description": "Identifier of the course work material."
            }
          },
          "required": ["courseId", "id"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "updateMask": {
              "type": "string",
              "description": "Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an INVALID_ARGUMENT error is returned.\n\nThe following fields may be specified by teachers:\n\ntitle\ndescription\nstate\nscheduledTime\ntopicId\n\nThis is a comma-separated list of fully qualified names of fields. Example: \"user.displayName,photo\"."
            }
          },
          "required": ["updateMask"]
        }
      },
      "required": ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_courses_courseWorkMaterials_delete: {
    title: "Deletes a course work material",
    description: "Use to delete a course work material.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: {
              type: "string", description: "Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWorkMaterials_get: {
    title: "Returns a course work material",
    description: "Use to return a course work material.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: {
              type: "string", description: "Identifier of the course work material."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_studentSubmissions_list: {
    title: "Method: courses.courseWork.studentSubmissions.list",
    description: "Returns a list of student submissions that the requester is permitted to view.",
    parameters: {
      "type": "object",
      "properties": {
        "pathParameters": {
          "type": "object",
          "description": "Parameters that are part of the URL path.",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            "courseWorkId": {
              "type": "string",
              "description": "Identifier of the student work to request. This may be set to the string literal \"-\" to request student work for all course work in the specified course."
            }
          },
          "required": ["courseId", "courseWorkId"]
        },
        "queryParameters": {
          "type": "object",
          "description": "Parameters that are appended to the URL query string.",
          "properties": {
            "userId": {
              "type": "string",
              "description": "Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: the numeric identifier for the user, the email address of the user, or the string literal 'me', indicating the requesting user."
            },
            "states": {
              "type": "array",
              "description": "Requested submission states. If specified, returned student submissions match one of the specified submission states.",
              "items": {
                "type": "string",
                "enum": [
                  "SUBMISSION_STATE_UNSPECIFIED",
                  "NEW",
                  "CREATED",
                  "TURNED_IN",
                  "RETURNED",
                  "RECLAIMED_BY_STUDENT"
                ]
              }
            },
            "late": {
              "type": "string",
              "description": "Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of late value.",
              "enum": [
                "LATE_VALUES_UNSPECIFIED",
                "LATE_ONLY",
                "NOT_LATE_ONLY"
              ]
            },
            "previewVersion": {
              "type": "string",
              "description": "Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.",
              "enum": []
            }
          }
        }
      },
      "required": ["pathParameters"]
    }
  },

  classroom_courses_courseWork_studentSubmissions_patch: {
    title: "Updates one or more fields of a student submission",
    description: `Use to update one or more fields of a student submission using the "courses.courseWork.studentSubmissions.patch" method of Google Classroom API.`,
    parameters: {
      "type": "object",
      "properties": {
        "requestBody": {
          "title": "StudentSubmission",
          "description": "Student submission for course work. StudentSubmission items are generated when a CourseWork item is created.",
          "type": "object",
          "properties": {
            "draftGrade": { "type": "number", "description": "Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers." },
            "assignedGrade": { "type": "number", "description": "Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers." },
            "assignmentSubmission": {
              "type": "object",
              "properties": {
                "attachments": {
                  "type": "array",
                  "items": {
                    "description": "The file can be one of the following types: driveFile, youTubeVideo, link, or form.",
                    "type": "object",

                    // "oneOf": [
                    //   { "properties": { "driveFile": { "type": "object" } } },
                    //   { "properties": { "youTubeVideo": { "type": "object" } } },
                    //   { "properties": { "link": { "type": "object" } } },
                    //   { "properties": { "form": { "type": "object" } } }
                    // ]
                  }
                }
              }
            },
            "shortAnswerSubmission": {
              "type": "object",
              "properties": {
                "answer": { "type": "string", "description": "Student response to a short-answer question." }
              }
            },
            "multipleChoiceSubmission": {
              "type": "object",
              "properties": {
                "answer": { "type": "string", "description": "Student's select choice." }
              }
            }
          }
        },
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": { "type": "string", "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias." },
            "courseWorkId": { "type": "string", "description": "Identifier of the course work." },
            "id": { "type": "string", "description": "Identifier of the student submission." }
          },
          "required": ["courseId", "courseWorkId", "id"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "updateMask": {
              "type": "string",
              "description": "Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified.\nThe following fields may be specified by teachers:\n\ndraftGrade\nassignedGrade\nThis is a comma-separated list of fully qualified names of fields. Example: \"user.displayName,photo\"."
            }
          },
          "required": ["updateMask"]
        }
      },
      "required": ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_courses_courseWork_studentSubmissions_reclaim: {
    title: "Reclaims a student submission on behalf of the student that owns it",
    description: `Use to reclaim a student submission on behalf of the student that owns it using the "courses.courseWork.studentSubmissions.reclaim" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            courseWorkId: {
              type: "string", description: "Identifier of the course work."
            },
            id: {
              type: "string", description: "Identifier of the student submission."
            },
          },
          required: ["courseId", "courseWorkId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_studentSubmissions_return: {
    title: "Returns a student submission",
    description: `Use to returns a student submission using the "courses.courseWork.studentSubmissions.return" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            courseWorkId: {
              type: "string", description: "Identifier of the course work."
            },
            id: {
              type: "string", description: "Identifier of the student submission."
            },
          },
          required: ["courseId", "courseWorkId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_studentSubmissions_turnIn: {
    title: "Turns in a student submission",
    description: `Use to turn in a student submission using the "courses.courseWork.studentSubmissions.turnIn" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            courseWorkId: {
              type: "string", description: "Identifier of the course work."
            },
            id: {
              type: "string", description: "Identifier of the student submission."
            },
          },
          required: ["courseId", "courseWorkId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_studentSubmissions_get: {
    title: "Returns the metadata of a student submission",
    description: `Use to return the metadata of a student submission using the "courses.courseWork.studentSubmissions.get" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            courseWorkId: {
              type: "string", description: "Identifier of the course work."
            },
            id: {
              type: "string", description: "Identifier of the student submission."
            },
          },
          required: ["courseId", "courseWorkId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_announcements_list: {
    title: "Returns a list of announcements that the requester is permitted to view",
    description: "Use to return a list of announcements that the requester is permitted to view.",
    parameters: {
      "type": "object",
      "properties": {
        "pathParameters": {
          "type": "object",
          "description": "Parameters that are part of the URL path.",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            },
          },
          "required": ["courseId"]
        },
        "queryParameters": {
          "type": "object",
          "description": "Parameters that are appended to the URL query string.",
          "properties": {
            "announcementStates": {
              "type": "array",
              "description": "Restriction on the state of announcements returned. If this argument is left unspecified, the default value is PUBLISHED.",
              "items": { "type": "string", "enum": ["PUBLISHED", "DRAFT", "DELETED"] }
            },
            "orderBy": {
              "type": "string",
              "description": "Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is updateTime. Supported direction keywords are asc and desc. If not specified, updateTime desc is the default behavior. Examples: updateTime asc, updateTime",
            }
          }
        }
      },
      "required": ["pathParameters"]
    }
  },

  classroom_courses_announcements_create: {
    title: "Creates an announcement",
    description: `Use to creates an announcement using the "courses.announcements.create" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Announcement,
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
          },
          required: ["courseId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_announcements_patch: {
    title: "Updates one or more fields of an announcement",
    description: `Use to update one or more fields of an announcement using the "courses.announcements.patch" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Announcement,
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            id: {
              type: "string", description: "Identifier of the announcement."
            },
          },
          required: ["courseId", "id"]
        },
        queryParameters: {
          type: "object",
          properties: {
            updateMask: {
              type: "string", description: [
                `Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an INVALID_ARGUMENT error is returned.`,
                `The following fields may be specified by teachers:`,
                ``,
                `text`,
                `state`,
                `scheduledTime`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            }
          },
          required: ["updateMask"]
        }
      },
      required: ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_courses_announcements_delete: {
    title: "Deletes an announcement",
    description: "Use to delete an announcement.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: {
              type: "string", description: "Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_announcements_get: {
    title: "Returns an announcement",
    description: "Use to return an announcement.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: {
              type: "string", description: "Identifier of the announcement."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_announcements_modifyAssignees: {
    title: "Modifies assignee mode and options of an announcement",
    description: `Use to modify assignee mode and options of an announcement using the "courses.announcements.modifyAssignees" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: {
          type: "object",
          properties: {
            assigneeMode: { type: "string", description: "Mode of the announcement describing whether it is accessible by all students or specified individual students.", enum: ["ALL_STUDENTS", "INDIVIDUAL_STUDENTS"] },
            modifyIndividualStudentsOptions: {
              description: "Set which students can view or cannot view the announcement. Must be specified only when assigneeMode is INDIVIDUAL_STUDENTS.",
              type: "object",
              properties: {
                addStudentIds: { type: "string", description: "IDs of students to be added as having access to this coursework/announcement." },
                removeStudentIds: { type: "string", description: "IDs of students to be removed from having access to this coursework/announcement." },
              }
            }
          },
          required: ["assigneeMode", "modifyIndividualStudentsOptions"]
        },
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            id: {
              type: "string", description: "Identifier of the announcement."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_courseWork_rubrics_list: {
    title: "Method: courses.courseWork.rubrics.list",
    description: "Returns a list of rubrics that the requester is permitted to view.",
    parameters: {
      "type": "object",
      "properties": {
        "pathParameters": {
          "type": "object",
          "description": "Parameters that are part of the URL path.",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            "courseWorkId": {
              "type": "string",
              "description": "Identifier of the student work to request. This may be set to the string literal \"-\" to request student work for all course work in the specified course."
            }
          },
          "required": ["courseId", "courseWorkId"]
        },
        "queryParameters": {
          "type": "object",
          "description": "Parameters that are appended to the URL query string.",
          "properties": {
            "previewVersion": {
              "type": "string",
              "description": "Optional. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.",
              "enum": ["PREVIEW_VERSION_UNSPECIFIED", "V1_20231110_PREVIEW", "V1_20240401_PREVIEW", "V1_20240930_PREVIEW"]
            }
          }
        }
      },
      "required": ["pathParameters"]
    }
  },

  classroom_courses_courseWork_rubrics_create: {
    title: "Creates a rubric",
    description: `Use to creates a rubric using the "courses.courseWork.rubrics.create" method of Google Classroom API.`,
    parameters: {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "title": "API Request Schema for Rubric",
      "description": "Defines the structure for an API request, including path parameters and a request body for a rubric.",
      "type": "object",
      "properties": {
        "requestBody": {
          "title": "Rubric",
          "description": "The rubric of the course work. A rubric is a scoring guide used to evaluate student work and give feedback.",
          "type": "object",
          "properties": {
            "criteria": {
              "description": "List of criteria. Each criterion is a dimension on which performance is rated.",
              "type": "array",
              "items": {
                "title": "Criterion",
                "description": "A dimension on which performance is rated.",
                "type": "object",
                "properties": {
                  "id": {
                    "description": "The criterion ID. On creation, an ID is assigned.",
                    "type": "string"
                  },
                  "title": {
                    "description": "The title of the criterion.",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the criterion.",
                    "type": "string"
                  },
                  "levels": {
                    "description": "The list of levels within this criterion.",
                    "type": "array",
                    "items": {
                      "title": "Level",
                      "description": "A level of performance within a criterion. It has an ID, a title, a description, and optional points. The ID is assigned on creation. The title must be set if points are not. Points, if set, must be distinct across all levels within a single criterion, and 0 is considered distinct from no points.",
                      "type": "object",

                      // "description": "A level of performance within a criterion.",
                      // "type": "object",
                      // "properties": {
                      //   "id": {
                      //     "description": "The level ID. On creation, an ID is assigned.",
                      //     "type": "string"
                      //   },
                      //   "title": {
                      //     "description": "The title of the level. If the level has no points set, title must be set.",
                      //     "type": "string"
                      //   },
                      //   "description": {
                      //     "description": "The description of the level.",
                      //     "type": "string"
                      //   },
                      //   "points": {
                      //     "description": "Optional points associated with this level. If set, all levels within the rubric must specify points and the value must be distinct across all levels within a single criterion. 0 is distinct from no points.",
                      //     "type": "number"
                      //   }
                      // }

                    }
                  }
                }
              }
            },
            "sourceSpreadsheetId": {
              "description": "Input only. Immutable. Google Sheets ID of the spreadsheet. This spreadsheet must contain formatted rubric settings.",
              "type": "string"
            }
          },
          "required": ["criteria"]
        },
        "pathParameters": {
          "title": "Path Parameters",
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            "courseWorkId": {
              "type": "string",
              "description": "Identifier of the course work."
            }
          },
          "required": ["courseId", "courseWorkId"]
        }
      },
      "required": ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_courseWork_rubrics_patch: {
    title: "Updates a rubric",
    description: `Use to update a rubric using the "courses.courseWork.rubrics.patch" method of Google Classroom API.`,
    parameters: {
      "type": "object",
      "properties": {
        "requestBody": {
          "title": "Rubric",
          "description": "The rubric of the course work. A rubric is a scoring guide used to evaluate student work and give feedback.",
          "type": "object",
          "properties": {
            "criteria": {
              "description": "List of criteria. Each criterion is a dimension on which performance is rated.",
              "type": "array",
              "items": {
                "title": "Criterion",
                "description": "A dimension on which performance is rated.",
                "type": "object",
                "properties": {
                  "id": {
                    "description": "The criterion ID. On creation, an ID is assigned.",
                    "type": "string"
                  },
                  "title": {
                    "description": "The title of the criterion.",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the criterion.",
                    "type": "string"
                  },
                  "levels": {
                    "description": "The list of levels within this criterion.",
                    "type": "array",
                    "items": {
                      "title": "Level",
                      "description": "A level of performance within a criterion. It has an ID, a title, a description, and optional points. The ID is assigned on creation. The title must be set if points are not. Points, if set, must be distinct across all levels within a single criterion, and 0 is considered distinct from no points.",
                      "type": "object",

                      // "description": "A level of performance within a criterion.",
                      // "type": "object",
                      // "properties": {
                      //   "id": {
                      //     "description": "The level ID. On creation, an ID is assigned.",
                      //     "type": "string"
                      //   },
                      //   "title": {
                      //     "description": "The title of the level. If the level has no points set, title must be set.",
                      //     "type": "string"
                      //   },
                      //   "description": {
                      //     "description": "The description of the level.",
                      //     "type": "string"
                      //   },
                      //   "points": {
                      //     "description": "Optional points associated with this level. If set, all levels within the rubric must specify points and the value must be distinct across all levels within a single criterion. 0 is distinct from no points.",
                      //     "type": "number"
                      //   }
                      // }

                    }
                  }
                }
              }
            },
            "sourceSpreadsheetId": {
              "description": "Input only. Immutable. Google Sheets ID of the spreadsheet. This spreadsheet must contain formatted rubric settings.",
              "type": "string"
            }
          },
          "required": ["criteria"]
        },
        "pathParameters": {
          "type": "object",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            "courseWorkId": {
              "type": "string",
              "description": "Identifier of the course work."
            },
            "id": {
              "type": "string",
              "description": "Identifier of the rubric."
            }
          },
          "required": ["courseId", "courseWorkId", "id"]
        },
        "queryParameters": {
          "type": "object",
          "properties": {
            "updateMask": {
              "type": "string",
              "description": "Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the sourceSpreadsheetId and the criteria list. Only one of these can be used at a time to define a rubric.\n\nThe rubric criteria list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request.\n\nThe following fields can be specified by teachers:\n\ncriteria\nsourceSpreadsheetId\n\nThis is a comma-separated list of fully qualified names of fields. Example: \"user.displayName,photo\"."
            }
          },
          "required": ["updateMask"]
        }
      },
      "required": ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_courses_courseWork_rubrics_delete: {
    title: "Deletes a rubric",
    description: `Use to delete a rubric using the "courses.courseWork.rubrics.delete" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            courseWorkId: {
              type: "string", description: "Identifier of the course work."
            },
            id: {
              type: "string", description: "Identifier of the rubric."
            },
          },
          required: ["courseId", "courseWorkId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_courseWork_rubrics_get: {
    title: "Returns a rubric",
    description: `Use to return a rubric using the "courses.courseWork.rubrics.get" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            courseWorkId: {
              type: "string", description: "Identifier of the course work."
            },
            id: {
              type: "string", description: "Identifier of the rubric."
            },
          },
          required: ["courseId", "courseWorkId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_topics_list: {
    title: "Returns the list of topics that the requester is permitted to view",
    description: "Use to return a list of topics that the requester is permitted to view.",
    parameters: {
      "type": "object",
      "properties": {
        "pathParameters": {
          "type": "object",
          "description": "Parameters that are part of the URL path.",
          "properties": {
            "courseId": {
              "type": "string",
              "description": "Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias."
            },
          },
          "required": ["courseId"]
        }
      },
      "required": ["pathParameters"]
    }
  },

  classroom_courses_topics_create: {
    title: "Creates a topic",
    description: `Use to creates a topic using the "courses.topics.create" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Topic,
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
          },
          required: ["courseId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_courses_topics_patch: {
    title: "Updates one or more fields of a topic",
    description: `Use to update one or more fields of a topic using the "courses.topics.patch" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Topic,
        pathParameters: {
          type: "object",
          properties: {
            courseId: {
              type: "string", description: "Course ID. Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias."
            },
            id: {
              type: "string", description: "Identifier of the topic."
            },
          },
          required: ["courseId", "id"]
        },
        queryParameters: {
          type: "object",
          properties: {
            updateMask: {
              type: "string", description: [
                `Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an INVALID_ARGUMENT error is returned.`,
                `The following fields may be specified:`,
                ``,
                `name`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            }
          },
          required: ["updateMask"]
        }
      },
      required: ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_courses_topics_delete: {
    title: "Deletes a topic",
    description: "Use to delete a topic.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: {
              type: "string", description: "Identifier of the topic to delete."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_courses_topics_get: {
    title: "Returns a topic",
    description: "Use to return a topic.",
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            courseId: { type: "string", description: "Course ID. The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias." },
            id: {
              type: "string", description: "Identifier of the topic."
            },
          },
          required: ["courseId", "id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_invitations_list: {
    title: "Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request",
    description: [
      `Use to retrieve a list of invitations that the requesting user is permitted to view, restricted to those that match the list request of Google Classroom using a method "invitations.list" of Google Classroom API.`,
      `At least one of userId or courseId must be supplied. Both fields can be supplied.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        queryParameters: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              description: [
                `Restricts returned invitations to those for a specific user. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
            courseId: {
              type: "string",
              description: "Restricts returned invitations to those for a course with the specified identifier."
            }
          }
        }
      },
      required: ["queryParameters"]
    }
  },

  classroom_invitations_create: {
    title: "Creates an invitation",
    description: [
      `Use to create an invitation using the "invitations.create" method of Google Classroom API.`,
      `Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Invitation,
      },
      required: ["requestBody"]
    }
  },

  classroom_invitations_remove: {
    title: "Deletes an invitation",
    description: `Use to deletes an invitation using the "invitations.delete" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            id: { type: "string", description: "Identifier of the invitation to delete." }
          },
          required: ["id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_invitations_get: {
    title: "Returns an invitation",
    description: `Use to return an invitation using the "invitations.get" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            id: { type: "string", description: "Identifier of the invitation to return." }
          },
          required: ["id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_invitations_accept: {
    title: "Accepts an invitation",
    description: `Use to accept an invitation using the "invitations.accept" method of Google Classroom API. Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            id: { type: "string", description: "Identifier of the invitation to accept." }
          },
          required: ["id"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_registrations_create: {
    title: "Creates a Registration",
    description: [
      `Use to create a Registration using the "registrations.create" method of Google Classroom API.`,
      `Creates a Registration, causing Classroom to start sending notifications from the provided feed to the destination provided in cloudPubSubTopic.`,
      `Returns the created Registration. Currently, this will be the same as the argument, but with server-assigned fields such as expiryTime and id filled in.`,
      `Note that any value specified for the expiryTime or id fields will be ignored.`,
      `While Classroom may validate the cloudPubSubTopic and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.Registration,
      },
      required: ["requestBody"]
    }
  },

  classroom_registrations_delete: {
    title: "Deletes a Registration",
    description: `Use to deletes a Registration using the "registrations.delete" method of Google Classroom API. Deletes a Registration, causing Classroom to stop sending notifications for that Registration.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            registrationId: { type: "string", description: "The registrationId of the Registration to be deleted." }
          },
          required: ["registrationId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_userProfiles_get: {
    title: "Returns a user profile",
    description: `Use to return a user profile using the "userProfiles.get" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            userId: {
              type: "string", description: [
                `Identifier of the profile to return. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            }
          },
          required: ["userId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_userProfiles_guardianInvitations_list: {
    title: "Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided",
    description: [
      `Use to retrieve a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided using a method "userProfiles.guardianInvitations.list" of Google Classroom API.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            studentId: {
              type: "string",
              description: [
                `The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
                `- the string literal "-", indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.`,
              ].join("\n")
            }
          },
          required: ["studentId"]
        },
        queryParameters: {
          type: "object",
          properties: {
            invitedEmailAddress: { type: "string", description: "If specified, only results with the specified invitedEmailAddress are returned." },
            states: {
              type: "array",
              description: "If specified, only results with the specified state values are returned. Otherwise, results with a state of PENDING are returned.",
              items: { type: "string", enum: ["PENDING", "COMPLETE"] }
            }
          }
        }
      },
      required: ["pathParameters", "queryParameters"]
    }
  },

  classroom_userProfiles_guardianInvitations_create: {
    title: "Creates a guardian invitation",
    description: `Use to creates a guardian invitation using the "courses.topics.create" method of Google Classroom API. Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.GuardianInvitation,
        pathParameters: {
          type: "object",
          properties: {
            studentId: { type: "string", description: "ID of the student (in standard format)" },
          },
          required: ["studentId"]
        }
      },
      required: ["requestBody", "pathParameters"]
    }
  },

  classroom_userProfiles_guardianInvitations_patch: {
    title: "Modifies a guardian invitation",
    description: `Use to modify a guardian invitation using the "userProfiles.guardianInvitations.patch" method of Google Classroom API. Currently, the only valid modification is to change the state from PENDING to COMPLETE. This has the effect of withdrawing the invitation.`,
    parameters: {
      type: "object",
      properties: {
        requestBody: jsonSchemaForClassroom.GuardianInvitation,
        pathParameters: {
          type: "object",
          properties: {
            studentId: { type: "string", description: "The ID of the student whose guardian invitation is to be modified." },
            invitationId: { type: "string", description: "The id field of the GuardianInvitation to be modified." },
          },
          required: ["studentId", "invitationId"]
        },
        queryParameters: {
          type: "object",
          properties: {
            updateMask: {
              type: "string", description: [
                `Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid:`,
                ``,
                `state`,
                `When set in a query parameter, this field should be specified as`,
                `updateMask=<field1>,<field2>,...`,
                `This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo".`,
              ].join("\n")
            }
          },
          required: ["updateMask"]
        }
      },
      required: ["requestBody", "pathParameters", "queryParameters"]
    }
  },

  classroom_userProfiles_guardianInvitations_get: {
    title: "Returns a specific guardian invitation",
    description: `Use to return a specific guardian invitation using the "userProfiles.guardianInvitations.get" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            studentId: { type: "string", description: "The ID of the student whose guardian invitation is being requested." },
            invitationId: { type: "string", description: "The id field of the GuardianInvitation being requested." },
          },
          required: ["studentId", "invitationId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_userProfiles_guardians_list: {
    title: "Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request",
    description: [
      `Use to retrieve a list of guardians that the requesting user is permitted to view, restricted to those that match the request using a method "userProfiles.guardianInvitations.list" of Google Classroom API.`,
      `To list guardians for any student that the requesting user may view guardians for, use the literal character - for the student ID.`,
    ].join("\n"),
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            studentId: {
              type: "string",
              description: [
                `Filter results by the student who the guardian is linked to. The identifier can be one of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
                `- the string literal "-", indicating that results should be returned for all students that the requesting user has access to view.`,
              ].join("\n")
            }
          },
          required: ["studentId"]
        },
        queryParameters: {
          type: "object",
          properties: {
            invitedEmailAddress: { type: "string", description: "Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators." }
          }
        }
      },
      required: ["pathParameters", "queryParameters"]
    }
  },

  classroom_userProfiles_guardians_remove: {
    title: "Deletes a guardian",
    description: `Use to delete a guardian using the "userProfiles.guardians.delete" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            studentId: {
              type: "string", description: [
                `The student whose guardian is to be deleted. One of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
            guardianId: { type: "string", description: "The id field from a Guardian." },
          },
          required: ["studentId", "guardianId"]
        }
      },
      required: ["pathParameters"]
    }
  },

  classroom_userProfiles_guardians_get: {
    title: "Returns a specific guardian",
    description: `Use to return a specific guardian using the "userProfiles.guardians.get" method of Google Classroom API.`,
    parameters: {
      type: "object",
      properties: {
        pathParameters: {
          type: "object",
          properties: {
            studentId: {
              type: "string", description: [
                `The student whose guardian is to be deleted. One of the following:`,
                `- the numeric identifier for the user`,
                `- the email address of the user`,
                `- the string literal "me", indicating the requesting user`,
              ].join("\n")
            },
            guardianId: { type: "string", description: "The id field from a Guardian." },
          },
          required: ["studentId", "guardianId"]
        }
      },
      required: ["pathParameters"]
    }
  },

};
