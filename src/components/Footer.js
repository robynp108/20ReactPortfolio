import React from "react";

const styles = {
    footerStyle: {
        position: "fixed",
        bottom: 0,
        width: "100%"
    }
}

function Footer() {
    return (
        <div className="card-footer text-muted" style={styles.footerStyle}>
            Robyn Palmer- Web Developer
        </div>
    );
}

export default Footer;