
import frappe

@frappe.whitelist(allow_guest=True)
def list_student_registration():
    return frappe.db.get_all("Student Registration", fields="*")


